import Vue from 'vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjsPluginUTC from 'dayjs-plugin-utc';
import 'intersection-observer';
import { ModalPlugin, NavbarPlugin, NavPlugin } from 'bootstrap-vue';
import 'intersection-observer';

dayjs.extend(relativeTime);
dayjs.extend(dayjsPluginUTC);

Vue.use(ModalPlugin);
Vue.use(NavbarPlugin);
Vue.use(NavPlugin);