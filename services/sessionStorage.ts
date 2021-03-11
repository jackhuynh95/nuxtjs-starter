import _ from 'lodash';
import session from './session';

const ACCOUNT_STORAGE_PREFIX = 'session.';
const REQUIRED_AUTH = ACCOUNT_STORAGE_PREFIX + 'requiredAuth';
const TOKEN_PWD = ACCOUNT_STORAGE_PREFIX + 'tokenPWD';
const USER_TYPE = ACCOUNT_STORAGE_PREFIX + 'userType';
const REGISTER_ACCOUNT = ACCOUNT_STORAGE_PREFIX + 'registerAccount';
const BUY_COURSE = ACCOUNT_STORAGE_PREFIX + 'buyCourse';
const REDIRECT_URL = ACCOUNT_STORAGE_PREFIX + 'redirect_url';
const PHONE_NUMBER = ACCOUNT_STORAGE_PREFIX + 'phoneNumber';
const EMAIL = ACCOUNT_STORAGE_PREFIX + 'email';
const LOGIN_FIRST = ACCOUNT_STORAGE_PREFIX + 'loginFirst';
const PARTNER = ACCOUNT_STORAGE_PREFIX + 'partner';

function setRequiredAuth(required = false) {
  session.set(REQUIRED_AUTH, required);
}

function getRequiredAuth() {
  return session.get(REQUIRED_AUTH);
}

function setTokenPWD(token) {
  session.set(TOKEN_PWD, token);
}

function getTokenPWD() {
  return session.get(TOKEN_PWD);
}

function setUserType(type) {
  session.set(USER_TYPE, type);
}

function getUserType() {
  return session.get(USER_TYPE);
}

function setRegisterAccount(flag = false) {
  session.set(REGISTER_ACCOUNT, flag);
}

function getRegisterAccount() {
  const isRegister = session.get(REGISTER_ACCOUNT);
  return isRegister ? isRegister == 'true' : true;
}

function setBuyCourse(course) {
  session.set(BUY_COURSE, course);
}

function getBuyCourse() {
  return session.get(BUY_COURSE);
}

function setRedirectURL(redirect_url) {
  session.set(REDIRECT_URL, redirect_url);
}

function getRedirectURL() {
  return session.get(REDIRECT_URL);
}

function removeRedirectURL() {
  return session.remove(REDIRECT_URL);
}

function setPhoneNumber(phone) {
  session.set(PHONE_NUMBER, phone);
}

function getPhoneNumber() {
  return session.get(PHONE_NUMBER);
}

function setEmail(email) {
  session.set(EMAIL, email);
}

function getEmail() {
  return session.get(EMAIL);
}

function setLoginFirst() {
  session.set(LOGIN_FIRST, true);
}

function getLoginFirst() {
  return session.get(LOGIN_FIRST);
}

function removeLoginFirst() {
  return session.remove(LOGIN_FIRST);
}

function setPartner(partner) {
  session.set(PARTNER, partner);
}

function getPartner() {
  return session.get(PARTNER);
}

function removePartner() {
  return session.remove(PARTNER);
}

export default {
  setRequiredAuth,
  getRequiredAuth,
  setTokenPWD,
  getTokenPWD,
  setUserType,
  getUserType,
  setRegisterAccount,
  getRegisterAccount,
  setBuyCourse,
  getBuyCourse,
  setRedirectURL,
  getRedirectURL,
  removeRedirectURL,
  setPhoneNumber,
  getPhoneNumber,
  setEmail,
  getEmail,
  setLoginFirst,
  getLoginFirst,
  removeLoginFirst,
  setPartner,
  getPartner,
  removePartner,
};
