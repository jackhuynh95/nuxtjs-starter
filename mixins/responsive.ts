import enquire from 'enquire.js';
import Vue from 'vue';
import Component from 'vue-class-component';

// https://semantic-ui.com/elements/container.html
const MOBILE_SCREEN = 'screen and (max-width: 767px)';
const TABLET_SCREEN = 'screen and (min-width: 768px) and (max-width: 991px)';
const SMALL_MONITOR_SCREEN = 'screen and (min-width: 992px) and (max-width: 1200px)';
const LARGE_MONITOR_SCREEN = 'screen and (min-width: 1201px)';

@Component({
  name: 'ResponsiveMixin',
})
export default class ResponsiveMixin  extends Vue {
  public isMobile = false;
  public isTablet = false;
  public isSmallMonitor = false;
  public isLargeMonitor = false;

  public get isComputer(): boolean {
    return this.isSmallMonitor || this.isLargeMonitor;
  }

  public get mobileScreenHandler(): any {
    return {
      match: this.onMobileMatch.bind(this),
      unmatch: this.onMobileUnMatch.bind(this),
    };
  }

  public get tabletScreenHandler(): any {
    return {
      match: this.onTabletMatch.bind(this),
      unmatch: this.onTabletUnMatch.bind(this),
    };
  }

  public get smallMonitorScreenHandler(): any {
    return {
      match: this.onSmallMonitorMatch.bind(this),
      unmatch: this.onSmallMonitorUnMatch.bind(this),
    };
  }

  public get largeMonitorScreenHandler(): any {
    return {
      match: this.onLargeMonitorMatch.bind(this),
      unmatch: this.onLargeMonitorUnMatch.bind(this),
    };
  }

  public beforeMount() {
    // http://wicky.nillia.ms/enquire.js/
    enquire.register(MOBILE_SCREEN, this.mobileScreenHandler)
    .register(TABLET_SCREEN, this.tabletScreenHandler)
    .register(SMALL_MONITOR_SCREEN, this.smallMonitorScreenHandler)
    .register(LARGE_MONITOR_SCREEN, this.largeMonitorScreenHandler);
  }

  public onMobileMatch() {
    this.isMobile = true;
  }

  public onMobileUnMatch() {
    this.isMobile = false;
  }

  public onTabletMatch() {
    this.isTablet = true;
  }

  public onTabletUnMatch() {
    this.isTablet = false;
  }

  public onSmallMonitorMatch() {
    this.isSmallMonitor = true;
  }

  public onSmallMonitorUnMatch() {
    this.isSmallMonitor = false;
  }

  public onLargeMonitorMatch() {
    this.isLargeMonitor = true;
  }

  public onLargeMonitorUnMatch() {
    this.isLargeMonitor = false;
  }

  public unRegisterAll() {
    enquire.unregister('MOBILE_SCREEN', this.mobileScreenHandler)
      .unregister('TABLET_SCREEN', this.tabletScreenHandler)
      .unregister('SMALL_MONITOR_SCREEN', this.smallMonitorScreenHandler)
      .unregister('LARGE_MONITOR_SCREEN', this.largeMonitorScreenHandler);
  }

  public beforeDestroy() {
    this.unRegisterAll();
  }
}
