import http from './http';

export function registerStudent(
  form: any,
): Promise<any> {
  return http
  .callApi({
    resource: 'account.registerStudent',
    data: {
      body: form,
    },
  })
  .then(res => {
    return res.data;
  })
  .catch(res => {
    const error = (res as any).response.data;
    return Promise.reject(error);
  });
}

export function registerTutor(
  form: any,
): Promise<any> {
  return http
  .callApi({
    resource: 'account.registerTutor',
    data: {
      body: form,
    },
  })
  .then(res => {
    return res.data;
  })
  .catch(res => {
    const error = (res as any).response.data;
    return Promise.reject(error);
  });
}

export function loginStudent(
  form: any,
): Promise<any> {
  return http
  .callApi({
    resource: 'account.loginStudent',
    data: {
      body: form,
    },
  })
  .then(res => {
    return res.data;
  })
  .catch(res => {
    const error = (res as any).response.data;
    return Promise.reject(error);
  });
}

export function loginTutor(
  form: any,
): Promise<any> {
  return http
  .callApi({
    resource: 'account.loginTutor',
    data: {
      body: form,
    },
  })
  .then(res => {
    return res.data;
  })
  .catch(res => {
    const error = (res as any).response.data;
    return Promise.reject(error);
  });
}

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
  registerStudent,
  registerTutor,
  loginStudent,
  loginTutor,
  getProfile,
  logout,
};
