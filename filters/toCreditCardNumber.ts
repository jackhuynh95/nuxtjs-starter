import dayjs from 'dayjs';
import Vue from 'vue';
import numberUtils from '@/services/numberUtils';

Vue.filter('toCreditCardNumber', function(value: string, isShow: boolean = true) {
  if (!value) return '';
  let formatValue = '';
  let showNumber = '';
  let count = value.length;

  if (count <= 4) {
    showNumber = value;
  }
  else
  {
    showNumber = value.slice(count - 4, count);
  }
  
  formatValue = '************';
  formatValue = (formatValue + showNumber).match(new RegExp('.{1,4}$|.{1,4}', 'g')).join(" ");
  formatValue = formatValue.replace(/x/g, '*');

  return formatValue;
});
