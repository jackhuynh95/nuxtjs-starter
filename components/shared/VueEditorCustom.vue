<template lang="pug">
  .vue-edit-custom-contain
    VueEditor.vue-editor-form.vue-editor-form-sev(ref='VueEditor' v-model='content' :editor-toolbar="customToolbar" :editorOptions='editorOptions' useCustomImageHandler @image-added="handleImageAdded" @input='updateValue')

</template>

<style lang="stylus" scoped>
@import '~@/styles/variables'

.vue-editor-form.vue-editor-form-sev
  background-color white
  z-index 1

  >>> .ql-toolbar.ql-snow
    border none
    position relative

    &::before
      content ''
      position absolute
      bottom 0
      left 0
      right 0
      height 1px
      background linear-gradient(90deg, #610289 0.01%, #a9148a 52%, #e9006d 100%) !important
  
  >>> .ql-container.ql-snow
    max-height 300px
    overflow auto
    border none

  >>> .ql-container.ql-snow
    .ql-tooltip.ql-editing
      left 15px !important

</style>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import StorageUploadFileMixin from '@/mixins/storageUploadFile';
import _ from 'lodash';

@Component({
  components: {},
  props: {
    value: {},
  },
})
export default class VueEditorCustom extends mixins(StorageUploadFileMixin) {
  value: any;
  content = '';
  customToolbar = [
    ["bold", "italic", "underline", "link", "image"],
  ];
  editorOptions = {
    modules: {
      imageDropAndPaste: {
      // add an custom image handler
        handler: this.imageHandler
      }
    }
  };

  updateValue() {
    this.$emit('input', this.content);
  }

  async imageHandler(imageDataUrl, type, imageData) {
    let quill = (this.$refs.VueEditor as any).quill;
    var file = imageData.toFile();
    let url = await this.uploadFile({ file, fileName: 'inbox' }); // Get url from response
    let index = (quill.getSelection() || {}).index;
    if (index < 0) index = quill.getLength();
    quill.insertEmbed(index, 'image', url, 'user');
  }

  async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
    let url = await this.uploadFile({ file, fileName: 'inbox' }); // Get url from response
    Editor.insertEmbed(cursorLocation, "image", url);
    resetUploader();
  }

  mounted() {
    this.content = this.value;
  }

  @Watch('value')
  onValue(newVal) {
    this.content = this.value;
  }
}

</script>
