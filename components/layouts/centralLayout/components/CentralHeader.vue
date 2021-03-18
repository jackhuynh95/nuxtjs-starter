<template lang="pug">
  .page_gernary  
    nav.navbar.navbar-expand-md.padding-header.py-md-0(:class="{sticky:!isTop}")
      .container
        .d-flex.align-items-center.w-100
          b-navbar-brand(:href='"" | domainLink')
            img.img-fluid(src="~@/components/layouts/centralLayout/assets/logo.svg" alt="")
          button.navbar-toggler.ml-auto.text-right(type='button' @click='toggleBgOverlay')
            span.burger(:class='{clicked:showMenu}')
              span
          .menu-primary.collapse.navbar-collapse(:class='{active:showMenu}')
            b-navbar-nav.navbar-nav.ml-md-auto.align-items-sm-center              
              b-nav-item.text-uppercase.text-medium(:to='{ path: "/login" }' linkActiveClass='active' exact @click='toggleBgOverlay')
                span(v-t='"header_menu.sign_in"') Đăng nhập
                
              li.nav-item.has-child.beutiful-border.icon-focus.language.pr-0
                div.parentsdiv.parents.d-md-none.d-block
                  | {{ activeLang }}
                div.parentsdiv.parents.d-md-flex.align-items-center.d-none
                  div.ion-fl.mr-2(:class = '$i18n.locale')
                  .text.text-uppercase {{ activeLang }}
                  .icon.d-flex.ml-2
                    img.unfocus.m-auto(src='~@/components/layouts/centralLayout/assets/sort-down.svg' alt='IMG')
                    img.focus.m-auto(src='~@/components/layouts/centralLayout/assets/sort-down-red.svg' alt='IMG')

                ul.sub-menu.list-unstyled
                  li.nav-item.icon-br.locale(v-for='(item, idx) in languages' :class='item.locale.toLowerCase()' @click='toggleBgOverlay')
                    a.nav-link(href="javascript:;" :title="item.label" @click.prevent.stop='selectLang(item)') 
                      | {{ item.label }}

          .bg-overlay(:class='{ active: showMenu && isMobile }' @click='toggleBgOverlay')  
    
</template>

<style lang="stylus" scoped>
@import '~@/styles/variables'
icon_en = '~@/components/layouts/centralLayout/assets/en.svg'
icon_vi = '~@/components/layouts/centralLayout/assets/vi.svg'
.name 
  color #283E50
  font-weight 600
>>> .nav-link.dropdown-toggle
      display flex
      align-items center
      &::after
        color #554BB9
>>> .dropdown-menu
      min-width 220px
.developer-guide.bg-header nav.navbar
  box-shadow 0px 4px 8px rgba(0, 0, 0, 0.05)
.avatar
  width 46px
  height 46px
>>>.dropdown
  >.nav-link
    font-family 'SF UI Display'
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.3;
    text-transform: uppercase;
    color: #283E50;
    @media(max-width 767px)
      padding: 1.2rem 0;
    &:after
      display none
    >.name
      min-width 180px
  .dropdown-menu
    margin-top 20px;
    padding 0
    background: #FFFFFF;
    border none
    border-radius 0
    box-shadow: 0px 2px 12px rgba(68, 0, 4, 0.1);

    @media mobile
      margin-top 0px

    li
      .dropdown-item
        font-family 'SF UI Display'
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 1.3;
        text-transform: capitalize;
        padding 1.25rem
        &.active,&:hover,&:focus
          color: #FFFFFF;
          background: #554BB9;
      &:not(:last-child) 
        .dropdown-item
          border-bottom 1px solid #E8E8E8
.ion-fl
  width 16px
  height 16px
  border-radius 50%
  background-size 100% 100%
  background-position center center
  background-repeat no-repeat
  &.en
    background-image url(icon_en) 
  &.vi
    background-image url(icon_vi) 
.page_gernary
  nav.navbar
    &.sticky
      height rootHeaderHeight
      background #fff
      position fixed
      top 0
      left 0
      right 0
      width 100%
      box-shadow 1px 1px 2px rgba(0, 0, 0, 0.1)
      z-index 99

.padding-header
  padding 10.5px

.becomesupernode.bg-header, .job-description.bg-header
  .navbar
    box-shadow 0px 2px 12px rgba(68, 0, 4, 0.1)

.bg-header:not(.page_gernary)
  .menu-primary
    ul.navbar-nav
      .nav-link, .has-child
        color #283E50

        &:hover, &:focus, &.router-link-exact-active
          color #BB070C

  nav
    background #fff

.bg-header.page_gernary .fixed-top
  background #02315B

.navbar-toggler
  width 85px
  height 50px

  &:hover, &:focus, &:active
    outline none

  .burger
    display inline-block
    position relative
    width auto
    z-index 9999
    margin-right 10px

  .burger span::before, .burger span::after
    position absolute
    content ''

  .burger span, .burger span::before, .burger span::after
    display block
    width 25px
    height 2px
    background-color #532A94
    outline 1px solid transparent
    transition all 0.3s

  .burger span
    position relative
    margin-top 8px
    margin-bottom 8px
    -webkit-user-select none
    -moz-user-select none
    -ms-user-select none
    user-select none
    user-select none
    position absolute
    top 50%
    left 50%
    margin-left -10px
    margin-top -6.5px

    &:last-child
      margin-bottom 0

  .burger span::before
    top -8px

  .burger span::after
    top 8px

  .burger.clicked span
    background transparent

    &::before
      transform translateY(8px) rotate(45deg)

    &::after
      transform translateY(-8px) rotate(-45deg)

.search-form
  width 55%
  margin-left auto
  margin-right 0

  @media mobile
    width 100%

.menu-primary
  @media (max-width: 767px)
    position fixed
    top rootHeaderHeightMobile
    right -260px
    height 100%
    min-width 260px
    background #fff
    z-index 9998
    transition all 0.5s

    &.active
      display block
      right 0
      padding-bottom 80px
      overflow-y auto
      // border-top: 1px solid #532A94;
  @media (min-width: 767px)
    >ul.navbar-nav
      >.nav-item
        padding-top 18px
        padding-bottom 18px
        &:last-child
          >a
            padding-right 0
        >.sub-menu
          box-shadow: 2px 4px 12px rgba(50, 9, 9, 0.2);
          border-radius: 8px;

  ul.navbar-nav
    @media (max-width: 767px)
      padding-top 15px
    .has-child, .nav-link
      font-family 'SF UI Display'
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      color: #283E50; 
      line-height 1.3
      padding-left 2rem
      padding-right 2rem           
      .parents.active
        color #532A94
      &:hover, &:focus, &.router-link-exact-active
        color #532A94
      @media (max-width: 1100px)
        font-size 13px
        padding-left 1rem
        padding-right 1rem

      @media (max-width: 992px)
        font-size 12px
        padding-left 0.5rem
        padding-right 0.5rem

      @media (max-width: 767px)
        color #000
        text-align left
        font-size 16px
        padding 1.2rem 1.5rem

    .nav-item.icon-focus
      .icon img.unfocus
        display block

      .icon img.focus
        display none

      &:hover, &:focus
        .icon img.unfocus
          display none

        .icon img.focus
          display block

    .nav-item.beutiful-border
      &:before
        content ''
        position absolute
        height 32px
        top 50%
        left 0
        right 0
        transform translateY(-50%)
        background transparent
        border 1px solid #FFFFFF
        border-radius 4px

      // &:hover, &:focus
      //   &:before
      //     border-color red-milano

      @media mobile
        &:before
          display none

    .nav-item
      position relative
      &.locale
        a::after
          content ''
          position absolute
          left 0
          top 50%
          transform translateY(-50%)
          width 16px
          height 16px
          background-size 100% 100% !important
      &.en
        a::after
          display inline-block
          background url(icon_en) no-repeat center center
          
      &.vi
        a::after
          display inline-block
          background url(icon_vi) no-repeat center center
      &:last-child
        // .nav-link
        //   padding-right 0
        &:hover, &:focus
          .sub-menu
            left auto
            right 0
        &:active
          .sub-menu
            @media(max-width 1366px)
              left auto
              right 0

      &:hover, &:focus
        .sub-menu
          top 100%
          display block

      @media(max-width 1366px)
        &:active
          .sub-menu
            top 100%
            display block

      @media (max-width: 767px)
        .sub-menu
          .nav-link
            padding-left 1.5rem
            font-size 15px

    .sub-menu
      @media (min-width: 768px)
        padding-left 0
        padding-right 0
        position absolute
        top 0
        left 0
        min-width 165px
        background #fff
        // padding-top 20px
        z-index 999
        display none
        overflow hidden         
        &.menu-1
          min-width 553px  
     
      .nav-item        
        position relative
        padding-left 2rem
        padding-right 2rem
        @media(max-width:767px)
          padding-left 1.5rem
          padding-right 1.5rem
        &.style-1
          background: #AE0B13;
          border-radius: 8px 8px 0 0;
          a
            color #fff !important
        &.style-2
          background: #AE0B13;
          a
            color #fff!important
        &.style-3
          background: #AE0B13;
          border-radius: 0 0 8px 8px;
          a
            color #fff!important
        &.border-b-1 
          a
            border-bottom: 1px solid #FFF;

        &:last-child
          border-bottom none
        .sub-menu
          padding-top 0
          padding-bottom 20px
          position static
          border-bottom: 1px solid #6fbbff;
          &:after 
            display none
          .nav-item
            padding-left 0
            padding-right 0
            a
              font-family 'Roboto'
              font-style: normal;
              font-weight: normal;
              color: red;
              border-bottom none
              padding-bottom 0
              padding-top 15px              
              &:after 
                display none !important
            &:first-child
              a
                padding-top 0
            &:hover,&:focus
              a
                color #bb070c
        &.has-child
          >a
            border-bottom none
          

        .nav-link
          color #283E50
          text-transform initial
          padding 20px 0 20px 1.8rem
          border-bottom 1px solid #283E50
          position relative
          white-space: nowrap
          line-height 1.4
          @media (max-width: 767px)
            padding-top 15px
            padding-bottom 15px
        &:last-child
          .nav-link
            border-bottom 0

        &:hover, &:focus,&:active
          .nav-link
            color #532A94
.menu-primary ul.navbar-nav .sub-menu.menu-1 .nav-item .nav-link 
  padding-left 8.5rem
  padding-right 0
  font-family 'Roboto'
  font-style: normal;
  font-weight: normal;
  white-space normal

.sticky, .bg-header:not(.page_gernary) , .becomesupernode
  .navbar-toggler
    .burger span, .burger span::before, .burger span::after
      background-color #532A94

    .burger.clicked span
      background transparent

.becomesupernode
  .navbar.padding-header
    .container
      max-width 100%

@media (min-width: 767px)
  .page_gernary
    .sticky
      .menu-primary
        ul.navbar-nav
          .nav-link, .has-child
            color #283E50
            &:hover, &:focus, &.router-link-exact-active
              color #532A94

    &.architecture
      .menu-primary
        ul.navbar-nav
          .nav-link, .has-child
            color #283E50

            &:hover, &:focus, &.router-link-exact-active
              color #BB070C

.bg-overlay
  display none
  position fixed
  top rootHeaderHeightMobile
  left 0
  right 0
  height 100%
  width 100%
  background rgba(0, 0, 0, 0.5)
  z-index 995

  &.active
    @media (max-width: 767px)
      display block

</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';
import { mixins } from 'nuxt-property-decorator';
import LangSelection from '@/mixins/langSelection';

@Component({
  components: {},
})
export default class CentralHeader extends mixins(LangSelection) {
  title: string;
  showMenu = false;  
  isTop = false;


  toggleBgOverlay() {
    this.showMenu = !this.showMenu;
    // if (this.isMobile) {
    //   window.document.body.classList.toggle('scroll-none');
    // }
  }
}
</script>

