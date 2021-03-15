<template lang="pug">
  textarea.ui.input(ref='textarea' v-model='address' type='text')
</template>

<style lang="stylus" scoped>
  textarea.ui.input
    min-height initial
    max-height initial
    resize none
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TextBoxAutoHeight',
  props: {
    value: {
      type: String,
    },
  },
  computed: {
  },
  data() {
    return {
      address: '',
    };
  },
  methods: {
    updateHeightAddress() {
      this.$nextTick(() => {
        (window as any).autoheight(this.$refs.textarea);
      });
    },
    updateValue(value) {
      this.$emit('input', value);
    },
  },
  mounted() {
    this.address = this.value;
    this.updateHeightAddress();
  },
  watch: {
    value(newVal: string) {
      if (newVal === this.address) return;
      this.address = newVal;
    },
    address(val) {
      this.updateValue(val);
      this.updateHeightAddress();
    },
  },
});
</script>
