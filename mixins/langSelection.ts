import Vue from 'vue';
import { mapState } from 'vuex';
import { Validator } from 'vee-validate';
import { initDictionaryConfig } from '@/plugins/veeValidate';
import Cookies from 'js-cookie';
import _ from 'lodash';

const veeValidateCustomDictionary = initDictionaryConfig();

export default Vue.extend({
  components: {
    ...mapState('account', ['profile']),
  },
  computed: {
    activeLocale() {
      return this.$i18n.locale;
    },
    activeLang() {
      const lang = _.find(this.languages, (lang) => {
        return lang.locale == this.activeLocale;
      });
      return lang.label;
    },
  },
  data() {
    const languages = [
      { label: 'Tiếng Việt', locale: 'vi', country: 'VN' },
      { label: 'English', locale: 'en', country: 'US' },
    ];

    return {
      languages,
      isLoading: false,
    };
  },
  methods: {
    selectLang(lang) {
      this.updateLocale(lang.locale);
      this.$nextTick(() => {
        window.location.reload();
      });
    },
    updateLocale(localeName, noImport = false) {
      Cookies.set('language', localeName);

      if (noImport) {
        return;
      }

      this.$i18n.setLocale(localeName);
    },
    importVeeValidateLocale(localeName): Promise<any> {
      let dict = veeValidateCustomDictionary[localeName];
      return import(`vee-validate/dist/locale/${localeName}`).then(locale => {
        locale = _.defaultsDeep(dict, locale);
        Validator.localize(localeName, locale);
        this.$validator.localize(locale);
      });
    },
    async initLang() {
      const locale = Cookies.get('language') || 'vi';
      this.updateLocale(locale);
    },
  },
  mounted() {
    this.initLang();
  },
});
