<template lang="pug">
  MaskedInput(autocomplete="off" :mask='amountMask' v-model.trim='amount' name='amount' type='text' :guide='false' :placeholder="placeholder" @input='submit')

</template>

<style lang="stylus" scoped>
@import '~@/styles/variables'

</style>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { mixins } from 'vue-class-component';
import MaskedInput from 'vue-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { numberWithPoint } from '@/services/numberUtils';
import _ from 'lodash';

@Component({
  components: {
    MaskedInput,
  },
  props: {
    value: {},
    placeholder: {
      type: String,
      default: '',
    },
    integerLimit: {
      type: Number,
      default: 10,
    },
  }
})
export default class MaskedInputAmount extends Vue {
  value: any;
  integerLimit: any;
  amount: any = '';
  
  updateValue(form) {
    this.$emit('input', form);
  }

  submit() {
    const amount = this.amount.replace(/\./g, '');
    this.updateValue(amount);
  }

  init() {
    this.amount = numberWithPoint(this.value);
  }

  mounted() {
    this.init();
  }

  get amountMask() {
    let totalMask = createNumberMask({
      integerLimit: this.integerLimit,
      prefix: '',
      allowDecimal: false,
      thousandsSeparatorSymbol: '.',
    });

    return totalMask;
  }

  @Watch('value')
  OnValue(newVal) {
    this.init();
  }
}
</script>