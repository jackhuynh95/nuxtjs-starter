<template lang="pug">
  div
    Login
    div {{ new Date() | dayjs('DD-MM-YYYY') }}

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
import Toast from '@/services/toast';

@Component({
  layout: 'authen',
  components: {
    Login,
  },
  meta: {
    requiresAuth: false,
  },
})
export default class Home extends Vue {

  mounted() {
    Toast.showSuccess('123', '');
  }
}
</script>