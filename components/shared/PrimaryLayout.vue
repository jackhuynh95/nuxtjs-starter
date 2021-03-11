<template lang="pug">
  .primary-layout-contain.d-flex.w-100.h-100.mx-0
    .primary-layout-left.mt-4.mt-md-0.h-100.pl-md-0.mb-md-0.mb-3.d-none.d-lg-block(:style='styleLayoutLeft')
      .primary-layout-left-contain.h-100
        .img-bg(:style='styleBG')
        slot(name='left')

    .primary-layout-right.flex-grow-1
      slot(name='right')

</template>

<style lang="stylus" scoped>
@import '~@/styles/variables'

.primary-layout-left-contain
  position relative
  // overflow hidden

.img-bg
  top 0
  left 0
  right 0
  bottom 0
  position absolute
  z-index -1
  background-size cover
  background-position center
  background-repeat no-repeat

  @media mobile
    height auto
    position initial !important

</style>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';

@Component({
  components: {},
  props: {
    bgUrl: {
      type: String,
      default: '',
    },
    bgColor: {
      type: String,
      default: '',
    },
    leftWidth: {
      type: Number,
      default: 480,
    },
  },
})
export default class PrimaryLayout extends Vue {
  bgUrl: any;
  bgColor: any;
  leftWidth: any;

  mounted() {}

  get styleBG() {
    let style = {};
    const isBgUrl = this.bgUrl ? true : false;

    if (isBgUrl) {
      style = {
        backgroundImage: `url(${this.bgUrl})`,
      };
    }
    else
    {
      style = {
        backgroundColor: this.bgColor,
      };
    }

    return style;
  }

  get styleLayoutLeft() {
    return {
      width: `${this.leftWidth}px`,
    };
  }
}
</script>
