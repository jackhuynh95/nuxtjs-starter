import numberUtils from '@/services/numberUtils';
import Vue from 'vue';

Vue.filter('numberWithPoint', numberUtils.numberWithPoint);
