<template lang="pug">
  div
    div Login
    nuxt-link(to='/signup') signup
    CopyClipBoard(msg='123') copy
    div {{ counter }}
    
</template>

<style lang="stylus" scoped>
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';
import CopyClipBoard from '@/components/shared/CopyClipBoard.vue';
import useCounter from '@/composables/useCounter';

@Component({
  components: {
    CopyClipBoard,
  },
  setup() {
    const { counter, twiceTheCounter } = useCounter();

    return {
      counter, twiceTheCounter
    };
  }
})
export default class LoginPage extends Vue {

  mounted() {}
}
</script>