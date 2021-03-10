import Vue from 'vue';
import TimeUtils from '@/services/timeUtils';

Vue.filter('relativeTime', TimeUtils.getRelativeTime);
