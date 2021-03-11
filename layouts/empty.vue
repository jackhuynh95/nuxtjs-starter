<template lang="pug">
  EmptyLayout
</template>

<script lang="ts">
import Vue from 'vue';
import Component from "nuxt-class-component";
import EmptyLayout from '@/components/layouts/emptyLayout/EmptyLayout.vue';

@Component({
  components: {
    EmptyLayout,
  },
})
export default class Empty extends Vue {}
</script>