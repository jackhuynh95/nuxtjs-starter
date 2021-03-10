import numberUtils from '@/services/numberUtils';
import Vue from 'vue';

Vue.filter('numberWithComma', numberUtils.numberWithComma);
