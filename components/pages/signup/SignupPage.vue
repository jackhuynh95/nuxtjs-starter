<template lang="pug">
  div
    div Signup
    nuxt-link(to='/login') login
    
</template>

<style lang="stylus" scoped>
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';

@Component({
  components: {},
})
export default class SignupPage extends Vue {
  mounted() {}
}
</script>