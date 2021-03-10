<template lang="pug">
  Central(:hasChild='true')
    div Authen
    nuxt
    
</template>

<script lang="ts">
import Vue from 'vue';
import Component from "nuxt-class-component";
import Central from './central.vue';

@Component({
  components: {
    Central,
  },
})
export default class AuthenLayout extends Vue {}
</script>
