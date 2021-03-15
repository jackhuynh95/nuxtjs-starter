<template lang="pug">
  .dowload-csv-contain(@click.prevent.stop='exportCSV')
    download-csv(ref='downloadCSVRef' :data='formatListData', :labels='labels', :fields='fields' :name='nameCsv')
      slot

</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import JsonCSV from 'vue-json-csv';
import _ from 'lodash';

@Component({
  components: {
    downloadCsv: JsonCSV,
  },
  props: {
    nameCsv: {
      type: String
    },
    fetchData: {
      type: Function,
      default: () => {},
    },
    fieldFrom: {
      type: String,
      default: 'from_hex_id',
    },
    isPageIndex: {
      type: Boolean,
      default: false
    },
    labels: {
      type: Object,
    },
    fields: {
      type: Array,
    },
    limit: {
      type: Number,
      default: 50,
    },
  },
})
export default class DownloadCSV extends Vue {
  fetchData: any;
  limit: any;
  fieldFrom: any;
  isPageIndex: any;
  isLoadingFetch = false;
  listData = [];
  txHead = '';
  page_index = '';

  updateLoading() {
    this.$emit('input:loading', this.isLoadingFetch);
  }

  fetchDataRecursion() {
    let form = {
      limit: this.limit,
    };

    if (this.isPageIndex) {
      const pageIndex: any = typeof this.page_index === 'number' ? this.page_index + 1 : 0;
      this.page_index = pageIndex;

      _.set(form, this.fieldFrom, this.page_index);
    }
    else
    {
      const lastData = _.last(this.listData);
      this.txHead = _.get(lastData, 'hex_id', '');

      _.set(form, this.fieldFrom, this.txHead);
      _.set(form, 'action', 'next');
    }
    
    return this.fetchData(form)
      .then((res: any) => {
        this.listData = _.concat(this.listData, res);
        
        if (!res.length || (res.length && res.length < this.limit)) return Promise.resolve();
        return this.fetchDataRecursion();
      });
  }

  async fetchDataAll() {
    if (this.isLoadingFetch) return;
    this.isLoadingFetch = true;
    this.updateLoading();
  
    return this.fetchDataRecursion()
      .then(() => {      
        if (!this.listData.length) return;
        (this.$refs.downloadCSVRef as any).$el.click();
      })
      .finally(() => {
        this.isLoadingFetch = false;
        this.updateLoading();
      });
  }

  refreshDataAll(isReset = false) {
    if (isReset) {
      this.listData = [];
      this.txHead = '';
      this.page_index = '';
    }

    this.fetchDataAll();
  }

  exportCSV() {
    this.refreshDataAll(true);
  }

  mounted() {}

  get formatListData() {
    return _.clone(this.listData);
  }
}
</script>
