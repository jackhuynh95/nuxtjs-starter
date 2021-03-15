<template lang="pug">
  div
    el-upload(:accept='accept' :on-change='onChange' action='' :auto-upload='false' :show-file-list='false' :httpRequest='httpRequest' :on-success='handleAvatarSuccess', :before-upload='beforeAvatarUpload')
      slot

</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';

@Component({
  props: {
    value: {
    },
    width: {
      default: 38
    },
    height: {
      default: 38
    },
    size: {
      default: 5,
    },
    accept: {
      type: String,
      default: 'image/x-png,image/gif,image/jpeg',
    },
  }
})
export default class FileSelect extends Vue {
  value?: any;
  imageUrl: string = '';
  width: number;
  height: number;
  size?: any;

  get sizeStyle(): any {
    return { width: this.width + 'px', height: this.height + 'px'};
  }

  get iconSizeStyle(): any {
    return {
      ...this.sizeStyle,
      lineHeight: this.width + 'px'
    }
  }

  handleAvatarSuccess(res, file) {
    this.imageUrl = URL.createObjectURL(file.raw);
  }

  onChange(file) {
    const isFile = true;
    const isLt2M = file.size / 1024 / 1024 < this.size;

    if (isFile && isLt2M) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.$emit('input', file.raw);
    }
    else
    {
      let textError = '';

      if (!isFile) {
        textError = "File isn't image";
      }
      else if (!isLt2M) {
        textError = 'File is too large';
      }

      this.$emit('error', textError);
    }
  }

  mounted() {
    if (this.value) {
      this.imageUrl = this.value;
    }
  }

  beforeAvatarUpload(file) {
    const isImage = file.type.includes('image');
    const isLt2M = file.size / 1024 / 1024 < this.size;

    if (isImage && isLt2M) {
      this.imageUrl = URL.createObjectURL(file.raw);
    }
    else
    {
      this.$emit('error');
    }

    return isImage && isLt2M;
  }

  httpRequest() {
  }

  @Watch('value')
  onChangeValue(newVal) {
    if (newVal instanceof File) {

    } else if (newVal) {
      this.imageUrl = newVal;
    }
  }
}
</script>
