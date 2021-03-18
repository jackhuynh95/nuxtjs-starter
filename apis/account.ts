import http from './http';

export function getProfile(): Promise<any> {
  return http
    .callApi({
      resource: 'account.detail',
    })
    .then(res => {
      return res.data;
    })
    .catch(res => {
      const error = (res as any).response.data;
      return Promise.reject(error);
    });
}

export function logout(): Promise<any> {
  return http
    .callApi({
      resource: 'account.logout',
    })
    .then(res => {
      return res.data;
    })
    .catch(res => {
      const error = (res as any).response.data;
      return Promise.reject(error);
    });
}

export default {
  getProfile,
  logout,
};
