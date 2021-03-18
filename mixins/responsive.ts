import Vue from 'vue';
import Component from 'vue-class-component';
@Component({
  name: 'ResponsiveMixin',
})
export default class ResponsiveMixin  extends Vue {

  get isMobile(): Boolean {
    return (this as any).$mq == 'mobile';
  }

  get isTablet(): Boolean {
    return (this as any).$mq == 'tablet';
  }

  get isComputer(): Boolean {
    return ['smallMonitor', 'largeMonitor'].includes((this as any).$mq);
  }
}
