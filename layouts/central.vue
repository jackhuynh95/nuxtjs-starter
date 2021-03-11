<template lang="pug">
  CentralLayout
    
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
})
export default class Central extends Vue {}
</script>