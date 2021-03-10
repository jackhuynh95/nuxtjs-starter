<template lang="pug">
  div
    div Login
    nuxt-link(to='/signup') signup
    
</template>

<style lang="stylus" scoped>
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';

@Component({
  components: {},
})
export default class LoginPage extends Vue {
  mounted() {}
}
</script>