<template lang="pug">
  .dropdown-contain.position-relative(:class='{ "visible": visible }' @mouseenter="onMouseEnter" @mouseleave="onMouseLeave")
    .label.text-muted.text-wrap.position-absolute.mb-2(v-if='showLabel' v-b-tooltip.hover :title='placeholder') {{ placeholder }}
    el-select.dropdown.w-100(ref='elSelectRef' v-if='!multiple' v-model='selectedItem' :placeholder='placeholder' :filterable='true' :allow-create='allowCreate' popper-class='select-beautiful' :popper-append-to-body='!triggerHover' :disabled='disabled' @change='onChange' @visible-change='onVisibleChange')
      el-option(v-for='(item, idx) in items', :key='idx' :label='item.label' :value='item.value')
    el-select.dropdown.w-100(ref='elSelectRef' v-else='' v-model='selectedItem' :placeholder='placeholder' :multiple='true' :multiple-limit	='multipleLimit' :collapse-tags='collapseTags' popper-class='select-beautiful' :popper-append-to-body='!triggerHover' :disabled='disabled' @change='onChange' @visible-change='onVisibleChange')
      el-option(v-for='(item, idx) in items', :key='idx' :label='item.label' :value='item.value')

</template>

<style lang="stylus" scoped>
@import '~@/styles/variables'

.label
  z-index 1
  left 0
  right 0
  bottom 100%

</style>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { sleep } from '@/services/promiseUtils';
import _ from 'lodash';

@Component({
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    value: {},
    items: {
      type: Array,
    },
    allowCreate: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    multipleLimit: {
      type: Number,
      default: 5,
    },
    collapseTags: {
      type: Boolean,
      default: false,
    },
    triggerHover: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean, 
      default: false,
    },
    showLabel: {
      type: Boolean, 
      default: false,
    },
  },
})
export default class InputSelect extends Vue {
  value: string;
  triggerHover: any;
  items: any;
  selectedItem = '';
  visible = false;
  hover = false;

  onChange() {
    this.$emit('input', this.selectedItem);
  }

  onVisibleChange(visible) {
    this.visible = visible;
  }

  async onMouseEnter() {
    this.hover = true;

    await sleep(500);

    if (!this.hover) return;
    this.debouncedFocus();
  }

  async onMouseLeave() {
    this.hover = false;

    await sleep(500);

    if (this.hover) return;
    this.debouncedBlur();
  }

  setVibileChange(visible) {
    if (!this.triggerHover || this.visible == visible) return;
    (this.$refs.elSelectRef as any).visible = visible;
  }

  debouncedFocus = _.debounce(
    () => {
      this.setVibileChange(true);
    },
    300,
    { trailing: true },
  );

  debouncedBlur = _.debounce(
    () => {
      this.setVibileChange(false);
    },
    300,
    { trailing: true },
  );

  init() {
    this.selectedItem = this.value;
  }

  mounted() {
    this.init();
  }

  @Watch('value')
  onValue(newVal) {
    this.init();
  }
}

</script>
