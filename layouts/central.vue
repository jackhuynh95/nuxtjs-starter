<template lang="pug">
  CentralLayout(:hasChild='hasChild')
    
</template>

<script lang="ts">
import Vue from 'vue';
import Component from "nuxt-class-component";
import CentralLayout from '@/components/layouts/centralLayout/CentralLayout.vue';
import _ from 'lodash';

@Component({
  components: {
    CentralLayout,
  },
  props: {
    hasChild: {
      type: Boolean,
      default: false,
    },
  },
})
export default class Central extends Vue {}
</script>