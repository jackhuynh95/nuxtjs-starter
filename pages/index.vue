<template lang="pug">
  div
    h1 {{ ip }}
    div(v-t='"header_menu.sign_in"')
    NuxtLink(to='/item/123') DETAIL
    form(@submit.prevent='')
      input(v-model='text' name='text' v-validate='"required"')
      small.form-text.text-danger {{ veeErrors.first("text") }}

</template>
<script>
  import Vue from 'vue';
  import Component from 'nuxt-class-component';
  import { mixins } from 'nuxt-property-decorator';
  import FormMixin from '@/mixins/form';
  
  @Component({})
  export default class Home extends mixins(FormMixin) {
    isLoading = false;
    text = '';

    mounted() {}

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