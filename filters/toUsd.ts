import dayjs from 'dayjs';
import Vue from 'vue';
import numberUtils from '@/services/numberUtils';

Vue.filter('toUsd', function(value: string) {
  if (!value) return '';
  value = '$' + numberUtils.numberWithComma(value.replace('W', '').trim());
  return value;
});
