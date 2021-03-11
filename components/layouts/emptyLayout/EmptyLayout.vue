<template lang="pug">
  .empty-layout
    Nuxt

</template>

<style lang="stylus" scoped>
  .empty-layout
    display flex
    align-items center
    justify-content center
    min-height 100vh

</style>

<script lang="ts">
import Vue from 'vue';
import Component from "nuxt-class-component";

@Component
export default class EmptyLayout extends Vue {}
</script>

