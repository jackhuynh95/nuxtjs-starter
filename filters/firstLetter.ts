import Vue from 'vue';

Vue.filter('firstLetter', function(value: string) {
  if (typeof value !== 'string') return ''
  return value.charAt(0).toUpperCase() + value.slice(1)
});
