<template lang="pug">
  .index-page
    .container
      h1 {{ ip }}

</template> 

<style lang="stylus" scoped>
@import '~@/styles/variables'

</style>

<script>
import Vue from 'vue';
import Component from 'nuxt-class-component';
import { mixins } from 'nuxt-property-decorator';
import { State } from 'vuex-class';
import FormMixin from '@/mixins/form';

@Component({
  layout: 'central',
  components: {},
  meta: {
    requiresAuth: false,
  },
})
export default class Home extends mixins(FormMixin) {
  isLoading = false;
  text = '';

  @State(state => state.account.profile)
  profile;

  mounted() {}

  async asyncData ({ params, $http }) {
    const ip = await $http.$get('https://icanhazip.com');
    return { ip };
  }

  head() {
    return { 
      title: this.ip,
    };
  }
}
</script>