import dayjs from 'dayjs';
import Vue from 'vue';
import 'dayjs/locale/vi'
import 'dayjs/locale/en'
Vue.filter('dayjs', function(value, format, locale) {
  dayjs.locale(locale)
  
  if (!value) return '';
  if (typeof value === 'string') {
    const newValue = parseFloat(value);
    return dayjs(newValue).format(format);
  }

  return dayjs(value).format(format);
});
