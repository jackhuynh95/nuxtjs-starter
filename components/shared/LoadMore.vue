<template lang="pug">
  .load-more(ref='loadMore')
    slot

</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import _ from 'lodash';

@Component({
  props: {},
})
export default class LoadMore extends Vue {
  observer?: IntersectionObserver;

  observeChatBox() {
    let loadMore = this.$refs.loadMore as HTMLElement;
    let observer = new IntersectionObserver((changes, observer) => {
      changes.forEach(change => {
        if (change.isIntersecting) {
          this.$emit('load-data');
        }
      });
    }, {
      root: null, // relative to document viewport 
      rootMargin: '0px', // margin around root. Values are similar to css property. Unitless values not allowed
      threshold: [0], // visible amount of item shown in relation to root
    });

    observer.observe(loadMore);
    this.observer = observer;
  }

  closeObserveChatBox() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }

  mounted() {
    this.observeChatBox();
  }
  
  beforeDestroy() {
    this.closeObserveChatBox();
  }
}
</script>
