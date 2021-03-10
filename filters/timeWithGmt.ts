import Vue from 'vue';
import dayjs from 'dayjs';
import gmtOffset from '@/services/gmtOffset';

Vue.filter('timeWithGmt', function(value: string) {
  let timestamp = dayjs(value).format('MMM-DD-YYYY hh:mm:ss A');
  let offset = gmtOffset.getOffset();

  return `${timestamp} GMT${offset}`;
});
