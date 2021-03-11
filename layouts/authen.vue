<template lang="pug">
  AuthenLayout
    
</template>

<script lang="ts">
import Vue from 'vue';
import Component from "nuxt-class-component";
import AuthenLayout from '@/components/layouts/authenLayout/AuthenLayout.vue';

@Component({
  components: {
    AuthenLayout,
  },
})
export default class Authen extends Vue {}
</script>
