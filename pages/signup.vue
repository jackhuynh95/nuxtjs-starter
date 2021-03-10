<template lang="pug">
  div
    Signup

</template> 

<style lang="stylus" scoped>
@import '~@/styles/variables'

div
  color color-success

</style>

<script>
  import Vue from 'vue';
  import Component from 'nuxt-class-component';
  import Signup from '@/components/pages/signup/SignupPage.vue';
  
  @Component({
    layout: 'central',
    components: {
      Signup,
    }
  })
  export default class SignupPage extends Vue {}
</script>