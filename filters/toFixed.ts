import Vue from 'vue';
import { toFixedNoRounding } from '@/services/numberUtils';

Vue.filter('toFixed', toFixedNoRounding);

Vue.filter('toFixedWithUnit', (v: string, precision) => {
  if (!v) {
    return v;
  }

  let [value, unit] = v.split(' ');
  return toFixedNoRounding(+value, precision) + ' ' + unit;
});
