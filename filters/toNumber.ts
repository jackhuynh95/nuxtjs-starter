import Vue from 'vue';

Vue.filter('toNumber', function(value: string) {
  if (!value) return '';
  value = value.match(/\d+/)[0];
  return value;
});
