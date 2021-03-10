import numberUtils from '@/services/numberUtils';
import Vue from 'vue';

Vue.filter('mFormatter', mFormatter);

function mFormatter(num, digits) {
  if (num >= 1000000) {
    let value = numberUtils.toFixedNoRounding(num / 1000000, digits);
    return numberUtils.numberWithComma(value) + ' Million';
  } 
  // else if (num >= 1000) {
  //   return numberUtils.numberWithComma((num / 1000).toFixed(digits)) + 'K';
  // } 
  else {
    return numberUtils.numberWithComma(num);
  }
}
