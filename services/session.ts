function set(key, value) {
  sessionStorage.setItem(key, value);
}

function get(key) {
  return sessionStorage.getItem(key);
}

function remove(key) {
  sessionStorage.removeItem(key);
}

function clear() {
  sessionStorage.clear();
}

export default {
  set,
  get,
  remove,
  clear,
}