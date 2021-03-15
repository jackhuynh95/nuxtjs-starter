<template lang="pug">
  span.eye-icon(@click.prevent='toggle')
    font-awesome-icon(:icon="typeEye")
</template>

<style lang="stylus" scoped>
@import '~@/styles/variables'

.eye-icon
  position relative
  float right
  margin-right 10px
  margin-top -32px
  z-index 2
  color grey

  :hover
    cursor pointer
</style>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({
  props: {
    inputRef: {
      // type: String,
      // value: '',
    },
  },
})
export default class ShowPassword extends Vue {
  typeEye = 'eye';
  inputRef: string;

  toggle() {
    let input: HTMLInputElement = this.$parent.$refs[this.inputRef] as HTMLInputElement;
    if (!input) {
      return;
    }

    let nextType = input.type === 'text' ? 'password' : 'text';
    input.type = nextType;
    if (nextType === 'password') {
      this.typeEye = 'eye';
    } else {
      this.typeEye = 'eye-slash';
    }

    input.focus();
  }
}
</script>