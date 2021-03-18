import Cookies from 'js-cookie';
const ACCOUNT_STORAGE_PREFIX = 'account.';
const TOKEN = ACCOUNT_STORAGE_PREFIX + 'token';

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
}

export default {
  isLoggedIn,
  getToken,
  saveToken,
  removeToken,
  logOut,
};
