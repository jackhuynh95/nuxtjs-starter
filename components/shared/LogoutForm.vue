<template lang="pug">
  .logout(@click='logout')
    slot

</template>

<style lang="stylus" scoped>
</style>

<script lang="ts">
import Vue from 'vue';
import AccountApis from '@/apis/account';
import AccountStorage from '@/services/accountStorage';

export default Vue.extend({
  components: {
  },
  name: 'LogoutForm',
  props: {
    userType: {
      type: String,
      default: 'teacher',
    },
    csrfname: {
      type: String,
      default: '',
    },
    csrftoken: {
      type: String,
      default: '',
    },
  },
  methods: {
    logout() {
      return AccountApis.logout()
        .then((res: any) => {
          if (res.success) {
            // success
          }
        })
        .catch(() => {})
        .finally(() => {
          AccountStorage.logOut(process.env.VUE_APP_BASE_DOMAIN_COOKIE);
          this.$store.dispatch('account/resetProfile');
        });
    },
  },
});
</script>
