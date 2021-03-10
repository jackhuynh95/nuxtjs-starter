import dayjs from 'dayjs';
import Vue from 'vue';

Vue.filter('unixToDate', function(value) {
  if (!value) return '';
  let d = dayjs.unix(value).toDate(); 
  return d;
});
