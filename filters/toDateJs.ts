import Vue from 'vue';

Vue.filter('toDateJs', function(value) {
  return new Date(value);
});
