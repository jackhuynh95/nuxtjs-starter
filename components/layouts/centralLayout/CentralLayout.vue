<template lang="pug">
  .main-layout.bg-header
    CentralHeader
    .content.d-flex(:class='{ "auth": isAuthPage }')
      nuxt.flex-grow-1(v-if='!hasChild')
      slot.flex-grow-1
    CentralFooter(v-if='!isAuthPage')
    
</template>

<style lang="stylus" scoped>
@import '~@/styles/variables'

.main-layout.bg-header
  padding-top rootHeaderHeight

  @media mobile
    padding-top rootHeaderHeightMobile

.content
  min-height 'calc(100vh - %s)' % (rootHeaderHeight rootFooterHeight)

  @media mobile
    min-height 'calc(100vh - %s)' % (rootHeaderHeight rootHeaderHeightMobile)

.content.auth
  min-height 'calc(100vh - %s)' % (rootHeaderHeight)

  @media mobile
    min-height 'calc(100vh - %s)' % (rootHeaderHeightMobile)

</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';
import { mixins } from 'nuxt-property-decorator';
import CentralHeader from './components/CentralHeader.vue';
import CentralFooter from './components/CentralFooter.vue';

@Component({
  components: {
    CentralHeader,
    CentralFooter,
  },
  props: {
    hasChild: {
      type: Boolean,
      default: false,
    },
  },
})
export default class CentralLayout extends Vue  {
  hasChild: any;
  
  mounted() {}

  get isAuthPage() {
    return this.hasChild;
  }
}
</script>

