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

  .central-footer
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 1.3
    color: #FFFFFF;
    min-height 200px;
    background #2f495e
  
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

