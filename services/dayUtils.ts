import _ from 'lodash';
import dayjs from 'dayjs';

export const weekday = [
  {
    id: '1',
    label: 'Thứ 2',
    meta: 'T2',
  },
  {
    id: '2',
    label: 'Thứ 3',
    meta: 'T3',
  },
  {
    id: '3',
    label: 'Thứ 4',
    meta: 'T4',
  },
  {
    id: '4',
    label: 'Thứ 5',
    meta: 'T5',
  },
  {
    id: '5',
    label: 'Thứ 6',
    meta: 'T6',
  },
  {
    id: '6',
    label: 'Thứ 7',
    meta: 'T7',
  },
  {
    id: '0',
    label: 'Chủ nhật',
    meta: 'CN',
  },
];


function revertMetdaListEvent(metadata) {
  let listDay: any = [];
  let listHour: any = [];
  let newMetaData = metadata;

  _.forEach(weekday, (day) => {
    if (metadata.includes(day.meta)) {
      listDay.push(day.meta);
      newMetaData = newMetaData.replace(day.meta, '');
    }
  });

  newMetaData = newMetaData.replace(/[\(\)]/g, '');
  listHour = newMetaData.split('-');

  return {
    dayWeek: listDay,
    hour: listHour,
  };
}

function generateMetdaListEvent(events) {
  let listEvent = _.groupBy(events, (event: any) => {
    return `${event.from}h-${event.to}h`;
  });
  let listMeta = _.map(listEvent, (event: any, eventKey) => {
    let days = _.map(event, (event) => {
      const dayDetail = weekday.find((e) => { return e.id == event.dayOfWeek });
      return dayDetail ? dayDetail.meta : '';
    });

    return `${days.join('-')}(${eventKey})`
  });

  return listMeta.join('-');
}

function convertListEvent(start, end, events) {
  let listEvent: any = [];
  let dStart: any = dayjs(start);
  let dEnd = dayjs(end);
  let duration = Math.abs(dStart.diff(dEnd, 'day'));
  let listDay: any = _.map(Array(duration).fill(1), (item, idx) => {
    return +dStart.add(idx + 1, 'day');
  });

  listDay = [
    start,
    ...listDay,
  ];

  _.forEach(listDay, (day) => {
    let newEvents = _.map(events, (event) => { 
      if (new Date(day).getDay() == event.dayOfWeek) {
        const from = event.from.split(':');
        const to = event.to.split(':');
        const dFrom = +dayjs(day).set('hour', from[0]).set('minute', from[1]);
        const dTo = +dayjs(day).set('hour', to[0]).set('minute', to[1]);

        return {
          from: dFrom,
          to: dTo,
        };
      }
    });

    listEvent = _.concat(listEvent, ...newEvents);
  });

  return _.compact(listEvent);
}

function revertListEvent(events) {
  let listEvent = _.map(events, (event) => {
    return {
      from: dayjs(event.from).format('HH:mm'),
      to: dayjs(event.to).format('HH:mm'),
      dayOfWeek: new Date(event.from).getDay().toString(),
    };
  });

  return _.uniqWith(listEvent, (_.isEqual as any));
}

function calculateDiffTimeByType(start, end, type) {
  let dStart = dayjs(start);
  let dEnd = dayjs(end);
  let diff = Math.abs(dStart.diff(dEnd, type));

  return diff;
}

function calculateDiffTime(start, end) {
  let listType: any = [
    {
      label: 'năm',
      value: 'year',
    },
    {
      label: 'tháng',
      value: 'month',
    },
    {
      label: 'ngày',
      value: 'day',
    },
  ];
  let listDiff = _.map(listType, (type) => {
    let newDiff = calculateDiffTimeByType(start, end, type.value);
    return {
      ...type,
      amount: newDiff,
    };
  });

  return listDiff.find((diff) => { return diff.amount > 0 });
}

// set timezone
function setTimeZone(timestamp, timeZone = '07:00') {
  let day = dayjs(timestamp).format('YYYY-MM-DDTHH:mm:ss');
  let formatDay = +dayjs(`${day}+${timeZone}`);

  return formatDay;
}

// convert timezone 
// result => obj.format() => unix time
function convertTimeZone(timestamp, timeZone = '07:00') {
  let [hour, min] = timeZone.split(':');
  let offset: any = parseFloat(hour) * 60 + parseFloat(min);

  return (dayjs(timestamp) as any).utcOffset(offset);
}

export default {
  revertMetdaListEvent,
  generateMetdaListEvent,
  convertListEvent,
  revertListEvent,
  calculateDiffTime,
  setTimeZone,
  convertTimeZone,
};
