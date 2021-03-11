import Cookies from 'js-cookie';
const ACCOUNT_STORAGE_PREFIX = 'account.';
const TOKEN = ACCOUNT_STORAGE_PREFIX + 'token';
const REQUIRES = ACCOUNT_STORAGE_PREFIX + 'requires';
const BLOCKED_SUPPORT = ACCOUNT_STORAGE_PREFIX + 'blocked_support';

let account_token = '';

export function isLoggedIn() {
  let token = getToken();
  return token ? true : false;
}

export function getToken() {
  return Cookies.get(TOKEN) || account_token;
}

export function saveToken(token: string, domain = '') {
  if (isLoggedIn()) {
    removeToken();
  }

  Cookies.set(TOKEN, token, { expires: 365 * 10, domain });
  account_token = token;
}

export function removeToken(domain = '') {
  Cookies.remove(TOKEN, { domain });
  account_token = '';
}

export function logOut(domain = '') {
  removeToken(domain);
  removeRequires();
}

export function getRequires() {
  let requires = Cookies.get(REQUIRES);
  return requires ? JSON.parse(requires) : {};
}

export function saveRequires(requires: Object) {
  let format = JSON.stringify(requires);
  Cookies.set(REQUIRES, format, { expires: 365 * 10 });
}

export function removeRequires() {
  Cookies.remove(REQUIRES);
}

export function getBlockedSupport() {
  return Cookies.get(BLOCKED_SUPPORT);
}

export function saveBlockedSupport(flag = true) {
  return Cookies.set(BLOCKED_SUPPORT, flag);
}

export default {
  isLoggedIn,
  getToken,
  saveToken,
  removeToken,
  logOut,
  getRequires,
  saveRequires,
  removeRequires,
  getBlockedSupport,
  saveBlockedSupport,
};
