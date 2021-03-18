import _ from 'lodash';
import DomainUrl from '@/services/domainUrl';
import Vue from 'vue';

let url = DomainUrl.url;
Vue.filter('domainLink', (options: any) => {
  let krLink = url;

  if (_.isString(options)) {
    krLink += options;
  }

  return krLink;
});

