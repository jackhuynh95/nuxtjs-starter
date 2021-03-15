<template lang="pug">
  .nav.nav-second-points(:class='{ "vertical": isVertical, "horizontal": !isVertical, "no-full": noFull, [stepNumber]: !noFull && !isVertical, "gradient": gradient }')
    slot
</template>

<style lang="stylus" scoped>
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  props: {
    isVertical:{
      type: Boolean,
      default: true,
    },
    countItem: {
      type: Number,
      default: 2,
    },
    noFull: {
      type: Boolean,
      default: false,
    },
    gradient: {
      type: Boolean,
      default: false,
    },
  },
})
export default class PointingMenuContainer extends Vue {
  countItem: Number;

  get stepNumber() {
    return 'step-' + this.countItem;
  }
}
</script>

