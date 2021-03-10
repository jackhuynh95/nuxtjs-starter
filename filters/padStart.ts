import Vue from 'vue';
import _ from 'lodash';

Vue.filter('padStart', function(value: string, length = 0, char = ' ') {
  if (!value) return '';
  return _.padStart(value, length, char)
});
