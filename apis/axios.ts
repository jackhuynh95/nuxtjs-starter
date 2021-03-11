import axios from 'axios';
import { get } from 'lodash';
import EventEmitter from '@/services/eventEmitter';
import AccountStorage from '@/services/accountStorage';

let eventEmitter = new EventEmitter();
export let eventObserable = eventEmitter.asObservable();

const instance = axios.create({
  baseURL: 'https://api-testing.fan8.club/api/',
  // withCredentials: true,
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    eventEmitter.emit(error.response.status.toString(), error);
    return Promise.reject(error);
  },
);

instance.interceptors.request.use(config => {
  if (AccountStorage.isLoggedIn()) {
    const token = AccountStorage.getToken();
    config.headers['Authorization'] = `${token}`;
  }
  
  return config;
});

export default instance;
