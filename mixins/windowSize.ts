import { Component, Vue } from 'vue-property-decorator';
import _ from 'lodash';

@Component
export default class WindowSizeMixin extends Vue {
  windowInnerWidth = 0;
  windowInnerHeight = 0;
  windowRealInnerHeight = 0;
  bindedUpdateSize: any;

  updateSize() {
    this.windowInnerWidth = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0,
    );
    this.windowInnerHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0,
    );
    this.windowRealInnerHeight = window.innerHeight || 0;
  }

  created() {
    this.updateSize();
  }

  mounted() {
    this.bindedUpdateSize = () => {
      this.updateSize();
    };
    // this.bindedUpdateSize = _.debounce(
    //   () => {
    //     this.updateSize();
    //   },
    //   300,
    //   {
    //     leading: true,
    //     trailing: true,
    //   },
    // );

    window.addEventListener('optimizedResize', this.bindedUpdateSize);
    window.setTimeout(() => {
      this.updateSize();
    }, 500);
  }

  beforeDestroy() {
    window.addEventListener('optimizedResize', this.bindedUpdateSize);
  }
}

(function() {
  var throttle = function(type: string, name: string, obj: any) {
    obj = obj || window;
    var running = false;
    var func = function() {
      if (running) {
        return;
      }
      running = true;
      requestAnimationFrame(function() {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };

  /* init - you can init any event */
  throttle('resize', 'optimizedResize', undefined);
})();
