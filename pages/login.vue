<template lang="pug">
  div
    Login

</template> 

<style lang="stylus" scoped>
@import '~@/styles/variables'

div
  color color-success

</style>

<script>
import Vue from 'vue';
import Component from 'nuxt-class-component';
import Login from '@/components/pages/login/LoginPage.vue';

@Component({
  layout: 'authen',
  components: {
    Login,
  },
  meta: {
    requiresAuth: false,
  },
})
export default class Home extends Vue {}
</script>