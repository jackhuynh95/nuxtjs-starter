import Vue from 'vue';
import dayjs from 'dayjs';
import _ from 'lodash';
import Cookies from 'js-cookie';
import dayUtils, { weekday } from '@/services/dayUtils';
import vueI18n from '@/plugins/vueI18n';
let i18n = vueI18n.create();

function localeDate(key): any {
  return i18n.t(`meta_date_day.${key}`);
}

Vue.filter('toMetaDateV2', function(value, type = 'date') {
  let locale = Cookies.get('language');
  dayjs.locale(locale);
  
  let newVal: any = '';
  if (!value) return '';
  let [start, end] = value.split('-');
  start = parseFloat(start);
  end = parseFloat(end);

  if (type == "date") {
    const startDate = new Date(start);
    const day = weekday.find((day: any) => { return day.id == startDate.getDay(); });
    const date = startDate.getDate();
    const month = startDate.getMonth();
    const year = startDate.getFullYear();
    const dayV1 = dayjs(startDate).format('dddd');
    const fullDate = dayjs(startDate).format('DD MMMM YYYY');
    const startTime = dayjs(start).format('hh:mm A');
    const endTime = dayjs(end).format('hh:mm A');

    newVal = `${locale == 'vi' ? day.label : dayV1}, ${fullDate} (${startTime} - ${endTime})`;
  }

  return newVal;
});

Vue.filter('toMetaDate', function(value: string, type = 'day') {
  let newVal: any = '';
  if (!value) return '';

  if (type == 'day') {
    // day -> T2
    let listDate = dayUtils.revertMetdaListEvent(value);
    let listDayWeek = _.get(listDate, 'dayWeek', '');

    newVal = listDayWeek.join('-');
  } else {
    // date -> T2 (6:00-8:00)
    newVal = value.replace(/\(/g, ' (');
    newVal = newVal.replace(/h/g, '');
    newVal = newVal.replace(/\-/g, ' - ');
  }

  // T2 -> MON
  weekday.forEach(day => {
    const metaKey = day.meta.toLowerCase();
    const metaValue = day.meta;

    newVal = newVal.replace(metaValue, localeDate(metaKey));
  });

  return newVal;
});
