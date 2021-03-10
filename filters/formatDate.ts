import Vue from 'vue';
import dayjs from 'dayjs';

Vue.filter('formatDate', function (value: string) {
  if (value) {
    let x = dayjs(+value).format('DD/MM/YYYY');
    return x;
  }
});
