<template lang="pug">
  .title-bg.d-flex.flex-column

</template>

<style lang="stylus" scoped>
@import '~@/styles/variables'

.title-bg
  max-width 360px
  padding 0 24px
  margin 0 auto

.title-bg .text-1
  margin-bottom 16px
  font-size 38px
  line-height 57px
  font-weight bold
  color white

.title-bg .text-2
  font-size 18px
  color white

</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class AuthenLayoutLeft extends Vue {}
</script>

