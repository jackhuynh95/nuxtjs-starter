<template lang="pug">
  div.central-footer.py-5 
    .container
      .row
        .col-md-6
        .col-md-6

      .row
        .col-12.col-md-6
          div © 2020 All Rights Reserved.

</template>
<style lang="stylus" scoped>
@import '~@/styles/variables'
  bg_footer = '~@/components/layouts/centralLayout/assets/bg_footer.jpg'
  icon_en = '~@/components/layouts/centralLayout/assets/en.svg'
  icon_vi = '~@/components/layouts/centralLayout/assets/vi.svg'

  .wrap-float
    >>>.floating-support
      position relative
      top 0
      bottom auto
      right 0
      .close
        display none

  .ion-fl
    
    &.en
      
    &.vi
      background-image url(icon_vi) 
  .select-language
    font-family: 'SF UI Display'
    font-style: normal;
    width 130px
    >>>.el-input 
      position relative
      display: -ms-flexbox !important;
      display: -webkit-box !important;
      display: flex !important;
      -ms-flex-align: center !important;
      -webkit-box-align: center !important;
      align-items: center !important;
      &::before
        content "" 
        display block
        width 16px
        height 16px
        border-radius 50%
        background-size 100% 100%
        background-position center center
        background-repeat no-repeat
      .el-input__inner
        height auto
        background none
        border none
        font-weight: 400;
        font-size: 15px;
        line-height: 1.3;
        text-transform: uppercase;
        color: #FFFFFF;
        padding 0 10px
      .el-input__icon
        line-height normal
        height auto
    >>>.el-select-dropdown   
      .el-select-dropdown__list
        li
          padding-top 10px;
          padding-bottom 10px
          height auto
          line-height 1
          color #283E50
          text-transform capitalize
          font-weight 600
          font-size 16px
          &:not(:last-child)
            border-bottom 1px solid #283e50
          &.hover,&:focus,&:hover
            color #532A94
    &.vi
      >>>.el-input 
        &::before
          background-image url(icon_vi)
    &.en
      >>>.el-input 
        &::before
          background-image url(icon_en)
           
    .el-select-dropdown
      max-height 120px
      overflow-y auto

    @media mobile
      .el-input .el-input__inner
        height 40px
  .new-letter
    .input-wrap
      position relative
      &::after
        content ""
        position absolute
        top 3px
        left 3px
        right 0
        width 100%
        height 100%
        background: #E9006D;
    input.form-control
      color #fff
      background: #554BB9;
      height 44px
      border none
      outline none
      position relative
      z-index 5
      &::-webkit-input-placeholder
        color: #fff;
      &::-moz-placeholder
        color: #fff;
      &:-ms-input-placeholder
        color: #fff;
      &:-moz-placeholder
        color: #fff;
      position relative
      
  .font-weight-medium
    font-weight: 600 !important
  .text-red
    color red
  .social
    li
      a
        .icon
          width 28px
          height 28px
          color #fff
          background: #554BB9;
          border-radius 50%
          position relative
          z-index 5
        &::after
          content ""
          position absolute
          top 1px
          left 1px
          right 0
          width 28px
          height 28px
          background: #E9006D;
          border-radius 50%
        &:hover,&:focus
          svg
            color #E9006D
          
  .central-footer
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 1.3
    color: #FFFFFF;
    min-height 200px;
    background url(bg_footer) no-repeat
    background-position top center
    background-size cover
  
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';
import { mixins } from 'nuxt-property-decorator';
import Responsive from '@/mixins/responsive';

@Component({
  components: {},
})
export default class CentralFooter extends Vue {}
</script>

