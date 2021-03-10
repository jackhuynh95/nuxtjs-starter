import viLang from '@/i18n/vi';
import VueI18n from 'vue-i18n';
import {once} from 'lodash'

function create() {
  const i18n = new VueI18n({
    locale: 'vi', // set locale
    fallbackLocale: 'vi',
    messages: buildMessages(), // set locale messages
    formatFallbackMessages: true,
    // missing: (locale, key, vm) => {
    //   console.log(vm, locale, key);
    // },
  });

  return i18n;
}

export default {
  create: once(create),
};

function buildMessages() {
  const messages = {
    vi: viLang,
  };

  return messages;
}
