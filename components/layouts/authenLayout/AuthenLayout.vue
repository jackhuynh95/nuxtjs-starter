<template lang="pug">
  CentralLayout(:hasChild='true')
    .authen-layout
      PrimaryLayout.align-items-center.justify-content-center(:bg-url='bgUrl')
        template(v-slot:left)
          AuthenLayoutLeft.h-100
        template(v-slot:right)
          router-view.px-3

</template>

<style lang="stylus" scoped>
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';
import { mixins } from 'nuxt-property-decorator';
import { State } from 'vuex-class';
import AuthenLayoutLeft from './components/AuthenLayoutLeft.vue';
import PrimaryLayout from '@/components/shared/PrimaryLayout.vue';
import CentralLayout from '@/components/layouts/centralLayout/CentralLayout.vue';

@Component({
  components: {
    AuthenLayoutLeft,
    PrimaryLayout,
    CentralLayout,
  },
})
export default class AuthenLayout extends Vue {

  @State(state => state.account.profile)
  profile: any;

  mounted() {}

  get bgUrl() {
    return require('./assets/bg-login-fan.png');
  }
}
</script>

