<template lang="pug">
  .not-found-page.d-flex.position-relative
    .content.m-auto.text-center
      .logo
        img(src='./assets/404_logo.svg' alt='IMG')
      .text
        | It looks like you’re lost...
      a.btn.btn-2.mx-auto(:href='"" | domainLink') 
        | Take me home

</template>

<style lang="stylus" scoped>
@import '~@/styles/variables'

bg = './assets/bg_galaxy.svg'

.not-found-page
  background-image url(bg)
  background-size cover
  background-position center
  background-repeat no-repeat
  // min-height 100vh
  height 100vh
  min-height 822px
  @media mobile
    min-height unset

  .logo
    margin-bottom 40px

    @media mobile
      width 320px

      & > img
        width 100%

  .text
    margin-bottom 33px
    font-family 'Sarabun'
    font-size 24px
    line-height normal
    color white

  .btn
    width 200px
    height 46px
    line-height normal
    font-size 16px
    text-transform uppercase
    display flex
    align-items center
    justify-content center
    border 1px solid #BB070C
    border-radius 4px

    @media (max-width: 767px)
      font-size 14px

    &.btn-2
      color #FFFFFF
      background linear-gradient(90deg, #CD1415 0%, #E03A0F 100%)
      transition all 0.5s

      &:hover
        color #BB070C
        background transparent

  .content
    z-index 1
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NotFoundPage extends Vue {}
</script>
