import Vue from 'vue';
import { isFunction } from 'lodash';


export default (params: any = {}) => {
  if (!params.top) {
    params.top = 50;
  }
  // let h = Math.max(
  //   document.documentElement.clientHeight,
  //   window.innerHeight || 0,
  // );
  // top = h*2;
  return Vue.extend({
    data() {
      return {
        isTop: (<any>this).checkIsTop()
      }
    },
    methods: {
      checkIsTop() {
        let topHeight = isFunction(params.top) ? params.top() : params.top;
        return (window.scrollY || document.body.scrollTop) < topHeight;
      },
      onScrollCheckTop() {
        var isTop = this.checkIsTop();
        if (this.isTop != isTop) {
          this.isTop = isTop;
        }
      }
    },
    mounted() {
      window.addEventListener(
        "scroll",
        this.onScrollCheckTop,
      );
    },
    beforeDestroy() {
      window.removeEventListener(
        "scroll",
        this.onScrollCheckTop,
      );
    }
  });
}
