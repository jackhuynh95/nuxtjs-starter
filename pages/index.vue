<template lang="pug">
  div
    h1 {{ ip }}
    NuxtLink(to='/item/123') DETAIL

</template>
<script>
  import Vue from 'vue';
  import Component from 'nuxt-class-component';

  @Component({})
  export default class Home extends Vue {
    isLoading = false;

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