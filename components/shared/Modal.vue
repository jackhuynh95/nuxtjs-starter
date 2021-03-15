<template lang="pug">
  b-modal(
    v-model='isShowing'
    centered 
    :title='settings.title'
    :hide-header='settings.hideHeader'
    :hide-footer='settings.hideFooter'
    :size='settings.size'
    :no-close-on-backdrop='settings.noCloseOnBackDrop'
    :modal-class='["modal-beautiful", settings.modalClass]'
    @shown='onChangeShowing'
    @change='onChangeShowing'
    @ok='ok'
    @cancel='cancel'
    @hide='close')
    template(v-slot:modal-header="")
      slot(name='modal-header')
      button.close.close-custom(type='button' aria-label='Close' @click='hide') 
        img(src='@/assets/modal/close-v2.svg' alt='IMG')
    slot(v-if='isShowContent')
    template(v-slot:modal-footer="")
      slot(name='modal-footer')
    
</template>

<style lang="stylus" scoped>
@import '~@/styles/variables'

.close-custom
  opacity 1
  outline none

</style>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
// import { Watch } from 'vue-class-component';

@Component({
  props: {
    settings: {
      type: Object,
      default: () => {
        return {};
      },
    },
    ok: {
      type: Function,
      default: () => {
        return {};
      },
    },
    cancel: {
      type: Function,
      default: () => {
        return {};
      },
    },
    close: {
      type: Function,
      default: () => {
        return {};
      },
    },
  },
})
export default class Modal extends Vue {
  isShowing = false;
  isShowContent = false;
  settings: any;

  show() {
    this.isShowing = true;
  }

  hide() {
    this.isShowing = false;
  }

  showContentModal() {
    this.isShowContent = true;
  }

  hideContentModal() {
    this.isShowContent = false;
  }

  onChangeShowing() {
    if (!this.isShowing && this.settings.onHidden) {
      this.settings.onHidden();
    }

    if (this.isShowing) {
      this.showContentModal();
    }
    else
    {
      setTimeout(() => { 
        this.hideContentModal();
      }, 500);
    }
  }
}
</script>