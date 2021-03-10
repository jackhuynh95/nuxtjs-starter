<template lang="pug">
  div
    div Central
    nuxt(v-if='!hasChild')
    slot
    
</template>

<script lang="ts">
import Vue from 'vue';
import Component from "nuxt-class-component";
import _ from 'lodash';

@Component({
  props: {
    hasChild: {
      type: Boolean,
      default: false,
    },
  },
})
export default class CentralLayout extends Vue {}
</script>