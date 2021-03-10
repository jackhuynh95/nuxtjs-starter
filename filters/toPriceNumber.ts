import Vue from 'vue';

Vue.filter('toPriceNumber', function(value: string) {
  if (!value) return '';
  let newValue: any = value.replace(/\,/g, '');
  return Math.floor(newValue) / 1000;
});
