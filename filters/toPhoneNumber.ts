import Vue from 'vue';
import LibPhoneNumber from '@/services/libPhoneNumber';

Vue.filter('toPhoneNumber', function(value: string) {
  if (!value) return '';
  return LibPhoneNumber.formatPhoneNumber(value);
});
