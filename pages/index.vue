<template lang="pug">
  div
    h1 {{ ip }}
    div {{ profile }}
    .text-oswald(v-t='"header_menu.sign_in"')
    NuxtLink(:to='localePath("/", "en")') English
    NuxtLink(:to='localePath("/", "vi")') Viet Nam
    form(@submit.prevent='')
      input(v-model='text' name='text' v-validate='"required"')
      small.form-text.text-danger {{ veeErrors.first("text") }}

</template> 

<style lang="stylus" scoped>
@import '~@/styles/variables'

div
  color color-success

</style>

<script>
  import Vue from 'vue';
  import Component from 'nuxt-class-component';
  import { mixins, State } from 'nuxt-property-decorator';
  import FormMixin from '@/mixins/form';
  
  @Component({})
  export default class Home extends mixins(FormMixin) {
    isLoading = false;
    text = '';

    @State(state => state.account.profile)
    profile;

    mounted() {
      setTimeout(() => {
        this.$store.dispatch('account/resetProfile');
      }, 500);
    }

    async asyncData ({ params, $http }) {
      const ip = await $http.$get('https://icanhazip.com');
      // text = ip;
      return { ip };
    }

    head() {
      return { 
        title: this.ip,
      };
    }
  }
</script>