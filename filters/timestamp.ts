import Vue from 'vue';
import dayjs from 'dayjs';
import gmtOffset from '@/services/gmtOffset';
import TimeUtils from '@/services/timeUtils';

Vue.filter('timestamp', function(value: string) {
  let relative = TimeUtils.getRelativeTime(value);
  let timestamp = dayjs(value).format('MMM-DD-YYYY hh:mm:ss A');
  let offset = gmtOffset.getOffset();

  return `${relative} (${timestamp} GMT${offset})`;
});
