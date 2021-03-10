import Vue from 'vue';

Vue.filter('tokenName', (value: string) => {
  if (!value) {
    return value;
  }
  value = value
    .replace('3144730325', 'GTO')
    .replace('422266069', '1SG')
    .replace('408898069', 'BNB')
    .replace('2645387285', 'DGX')
    .replace('VESTS', 'S')
    .replace('2973826645', 'KNOW');
  return value;
});
