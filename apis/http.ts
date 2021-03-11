import { AxiosPromise } from 'axios';
import axios, { eventObserable } from './axios';
import accountStorage from '@/services/accountStorage';
import _ from 'lodash';

const http = {
  client: axios,
  callApi,
  eventObserable,
};

const apiResources: any = {
  account: {
    registerStudent: {
      url: '/register/student',
      verb: 'POST',
    },
    registerTutor: {
      url: '/register/tutor',
      verb: 'POST',
    },
    loginStudent: {
      url: '/login/student',
      verb: 'POST',
    },
    loginTutor: {
      url: '/login/tutor',
      verb: 'POST',
    },
    detail: {
      url: '/account/details',
      verb: 'POST',
    },
    logout: {
      url: '/logout',
      verb: 'POST',
    },
  },
};

export default http;

interface CallApiParams {
  resource: string;
  data?: object;
  headers?: object;
  config?: object;
}

function callApi(params: CallApiParams): AxiosPromise {
  const apiSplit = params.resource.split('.');
  const module = apiSplit[0];
  const method = apiSplit[1];
  const fullResource = apiResources[module][method];
  let url: string = fullResource.url;
  const data: any = params.data || {};
  const urlParams = _.omit(data, ['body']);
  const headers =
    fullResource.headers || params.headers
      ? _.assign(
          {},
          axios.defaults.headers,
          fullResource.headers,
          params.headers,
        )
      : axios.defaults.headers;

  if (fullResource.requiredToken) {
    let token = accountStorage.getToken();
    headers.Authorization = `${token}`;
  }

  _.forIn(urlParams, (value, key) => {
    if (value !== null || value !== undefined) {
      url = url.replace('{' + key + '}', value);
    } else {
      const reg = new RegExp(key + '={' + key + '}&?');
      url = url.replace(reg, '');
    }
  });

  url = url.replace(/[&\?]$/, '');
  const config = _.assign(
    {
      method: fullResource.verb,
      url,
      data: data.body,
      headers,
    },
    params.config,
  );

  return axios.request(config).catch(e => {
    throw e;
  });
}