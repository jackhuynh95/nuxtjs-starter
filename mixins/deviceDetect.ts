import Vue from 'vue';
import Component from 'vue-class-component';
import DeviceDetect from '@/services/deviceDetect';

@Component
export default class extends Vue {
  isMobile = DeviceDetect.isMobile();
  isSafari = DeviceDetect.isSafari();
  isIPhone = DeviceDetect.isIPhone();
  isiOS = DeviceDetect.isiOS();
}