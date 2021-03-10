import dayjs from 'dayjs';

export function getChatTime(time: number, format = 'time'): string {
  let date = dayjs(time);
  format = format === 'time' ? 'HH:mm' : 'MMM DD';

  return date.format(format);
}

function getRelativeTime(value: string, now: dayjs.Dayjs = null) {
  now = now || dayjs();
  let end = dayjs(value);
  let milliseconds = now.diff(end, 'millisecond');
  let text = '';

  if (milliseconds >= 0) {
    let duration = convertMsToDuration(milliseconds);

    let seconds = duration.seconds;
    let minutes = duration.minute;
    let hours = duration.hour;
    let day = duration.day;

    if (day) {
      text += `${day} days ago`;
      return text;
    }

    if (hours) {
      text += `${hours} hours `;
    }

    if (hours || minutes) {
      text += `${minutes} min `;
    }

    text += `${seconds} secs `;

    text += 'ago';
  } else {
    milliseconds = end.diff(now, 'millisecond');
    let duration = convertMsToDuration(milliseconds);
    let seconds = duration.seconds;
    let minutes = duration.minute;
    let hours = duration.hour;
    let day = duration.day;

    text += 'In ';
    if (day) {
      text += `${hours} days`;
      return text;
    }

    if (hours) {
      text += `${hours} hours `;
    }

    if (hours || minutes) {
      text += `${minutes} min `;
    }

    text += `${seconds} secs `;
  }

  return text;
}

function convertMsToDuration(milliseconds) {
  let day, hour, minute, seconds;
  seconds = Math.floor(milliseconds / 1000);
  minute = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hour = Math.floor(minute / 60);
  minute = minute % 60;
  day = Math.floor(hour / 24);
  hour = hour % 24;

  return {
    day: day,
    hour: hour,
    minute: minute,
    seconds: seconds,
  };
}

// MM/YY -> timestamp
function convertDateTimeStamp(value) {
  if (!value) return '';
  let [ MM, YY ] = value.split('/');
  let date = `${MM}/01/20${YY}`;
  let newDate = dayjs(date, 'MM/DD/YYYY');
  let nowDate = +dayjs().set("date", 1).startOf('day');
  let valid = newDate.isValid() && newDate.valueOf() >= nowDate;
  return valid ? newDate.valueOf() : '';
}

export default {
  convertMsToDuration,
  convertDateTimeStamp,
  getRelativeTime,
};
