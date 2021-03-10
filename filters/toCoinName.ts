import _ from 'lodash';
import Vue from 'vue';

const defaultCoins = {
  btc: 'Bitcoin',
  eth: 'Ethereum',
  gto: 'Gifto',
  know: 'Know',
  trx: 'TRON',
  usdt: 'Tether',
  xem: 'NEM',
  spike: 'Spiking',
  dgx: 'Digix Gold Token',
  
};

Vue.filter(
  'toCoinName',
  (coinCode: string, coins: string | undefined) => {
    let lCoinCode = coinCode.toLowerCase();
    let coinName = _.get(coins, `${lCoinCode}.name`);
    return coinName || defaultCoins[lCoinCode] || coinCode;
  },
);
