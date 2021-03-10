<template lang="pug">
  el-tooltip(
    :manual='true' 
    :value='copiedText' 
    effect='dark' 
    content='Copied' 
    placement='top')
    .action(
      @mouseleave='resetCopyText'
      v-clipboard:copy="msg"
      v-clipboard:success="onCopyText"
      v-clipboard:error="onErrorText")
        slot

</template>

<style lang="stylus" scoped>
@import '~@/styles/variables'

.action
  cursor pointer
  
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
})
export default class CopyClipBoard extends Vue {
  copiedText = false;

  resetCopyText() {
    this.copiedText = false;
  }
  onCopyText() {
    this.copiedText = true;
  }
  onErrorText() {}
}
</script>