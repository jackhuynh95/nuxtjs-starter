import Vue from 'vue';

Vue.filter('digit', function(value: number | string, position = 0) {
  if (!value) return '';
  value = value.toString();
  let digits = value.split('');
  return digits[position] || '0';
});
