import { toNumber } from 'lodash';

export function toFixedNoRounding(value: Number, precision = 5): string {
  let arr = toNumber(value).toFixed(18).split('.');
  if (arr.length === 1) return value.toString();
  let [int, dec] = arr;
  dec = dec.padEnd(precision, '0');
  let max = dec.length - 1;

  return precision === 0
    ? int
    : [int, '.', dec.substr(0, precision > max ? max : precision)].join('');
}

let numberFormat = new Intl.NumberFormat('en-US', { maximumFractionDigits: 8 });
export function numberWithComma(value: any) {
  if (!value) {
    return value;
  }

  let [number, unit] = value.toString().split(' ');
  const fractionDigits = number.toString().split('.')[1];

  try {
    number = parseFloat(number);
  } catch (e) {
    //
  }

  let localeString = numberFormat.format(number);

  localeString = localeString.split('.')[0];
  if (fractionDigits) {
    localeString = localeString + '.' + fractionDigits;
  }

  return unit ? `${localeString} ${unit}` : localeString;
}

export function numberWithPoint(value: any) {
  if (!value) {
    return value;
  }

  try {
    value = parseFloat(value);
  } catch (e) {
    //
  }

  let numberFormatDE = new Intl.NumberFormat('de-DE', { maximumFractionDigits: 8 });
  let localeString = numberFormatDE.format(value);

  return localeString;
}

export function plusWithUnit(left: string, right: string): string {
  let [leftNum, leftUnit] = left.split(' ');
  let [rightNum, rightUnit] = right.split(' ');

  return `${(+leftNum) + (+rightNum)} ${leftUnit}`;
}

export default {
  numberWithComma,
  numberWithPoint,
  toFixedNoRounding,
  plusWithUnit,
}