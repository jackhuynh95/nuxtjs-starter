import { parsePhoneNumberFromString, formatIncompletePhoneNumber } from 'libphonenumber-js';

function formatPhoneNumber(phone) {
  if (!phone) return '';
  
  const phoneNumber = formatIncompletePhoneNumber(phone)
  return phoneNumber;
}

function formatPhoneNumberFull(phone_number, country_code = '+84') {
  let phone = country_code + phone_number;
  return phone.replace(`${country_code}0`, country_code);
}

export default {
  formatPhoneNumber,
  formatPhoneNumberFull,
};