<template lang="pug">
  .lottie(:style='style', ref='lavContainer')
</template>

<script lang="ts">
import lottie from 'lottie-web';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({
  props: {
    options: {
      type: Object,
      required: true,
    },
    height: Number,
    width: Number,
    hoverRegion: {},
    lazyLoad: {
      type: Boolean,
      default: false,
    },
  },
})
export default class Lottie extends Vue {
  anim: any = null;
  width: number;
  height: number;
  options: any;
  observer?: IntersectionObserver = null;
  isHovering = false;
  hoverRegion: HTMLElement;
  mouseover: EventListenerOrEventListenerObject = null;
  mouseleave: EventListenerOrEventListenerObject = null;
  lazyLoad: boolean;
  onResize: EventListenerOrEventListenerObject = null;

  get style() {
    return {
      width: this.width ? `${this.width}px` : '100%',
      height: this.height ? `${this.height}px` : '100%',
      overflow: 'hidden',
      margin: '0 auto',
    };
  };

  get finalHoverRegion() {
    return this.hoverRegion || this.$el;
  }

  listenHover() {
    let el = this.finalHoverRegion || this.$el;
    let mouseover = () => {
      this.onMouseOver();
    };

    let mouseleave = () => {
      this.onMouseLeave();
    };

    el.addEventListener('mouseover', mouseover);
    el.addEventListener('mouseleave', mouseleave);

    this.mouseover = mouseover;
    this.mouseleave = mouseleave;
  }

  removeListenHover(el: Element = null) {
    el = el || this.$el;

    if (this.mouseover) {
      el.removeEventListener('mouseover', this.mouseover);
      el.removeEventListener('mouseleave', this.mouseleave);
    }
  }

  onMouseOver() {
    this.isHovering = true;
  }

  onMouseLeave() {
    this.isHovering = false;
  }

  get lottieOptions() {
    return {
      renderer: 'svg',
      loop: false,
      autoplay: false,
      ...this.options,
    };
  }

  mounted() {
    if (!this.lazyLoad) {
      this.renderLottie();
      this.listenHover();
      this.watchWindowResize();
    } else {
      this.$nextTick(() => {
        this.observerLazyload();
      });
    }
  }

  observerLazyload() {
    let lottie = this.$refs.lavContainer as HTMLElement;
    let observer = new IntersectionObserver(
      (changes, observer) => {
        changes.forEach(change => {
          if (change.isIntersecting) {
            this.renderLottie();
            this.listenHover();
            this.watchWindowResize();

            observer.disconnect();
          }
        });
      },
      {
        root: null, // relative to document viewport
        rootMargin: '0px', // margin around root. Values are similar to css property. Unitless values not allowed
        threshold: [0],
      },
    );

    observer.observe(lottie);
  }

  renderLottie() {
    if (this.anim) {
      this.anim.destroy();
    }

    this.anim = lottie.loadAnimation({
      container: this.$refs.lavContainer,
      ...this.lottieOptions,
    });

    this.$emit('animCreated', this.anim);
    this.observerSprite();
    this.setOptions();
  }

  setOptions() {
    if (this.options.direction) {
      this.anim.setDirection(this.options.direction);
    }

    if (this.options.speed) {
      this.anim.setSpeed(this.options.speed);
    }

    if (this.options.hover) {
      this.anim.addEventListener('data_ready', () => {
        this.anim.goToAndStop(this.options.hover, true);
      });
    }
  }

  watchWindowResize() {
    if (this.lottieOptions.renderer === 'canvas') {
      this.onResize = () => {
        this.renderLottie();
      };

      window.addEventListener('resize', this.onResize);
    }
  }

  beforeDestroy() {
    if (this.anim) {
      this.anim.destroy();
    }

    if (this.observer) {
      this.observer.disconnect();
    }
    
    this.removeListenHover();
    window.removeEventListener('resize', this.onResize);
  }

  observerSprite() {
    let lottie = this.$refs.lavContainer as HTMLElement;
    let observer = new IntersectionObserver(
      (changes, observer) => {
        changes.forEach(change => {
          if (this.options.autoplay || this.options.playOnIntersecting) {
            if (change.isIntersecting) {
              this.anim.play();
            } else {
              this.anim.pause();
            }
          }
        });
      },
      {
        root: null, // relative to document viewport
        rootMargin: '0px', // margin around root. Values are similar to css property. Unitless values not allowed
        threshold: [0],
      },
    );

    observer.observe(lottie);
    this.observer = observer;
  }

  @Watch('isHovering')
  onChangeHover(newVal) {
    if (this.options.hover) {
      if (newVal) {
        this.anim.play();
      } else {
        this.anim.goToAndStop(this.options.hover, true);
      }
    }
  }

  @Watch('finalHoverRegion')
  onChangeFinalHoverRegion(newVal, oldVal) {
    this.removeListenHover(oldVal);
    this.listenHover();
  }
}
</script>