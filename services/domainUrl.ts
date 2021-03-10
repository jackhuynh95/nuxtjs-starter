function getDomainUrl() {
  if (process.env.VUE_APP_BASE_DOMAIN_URL) {
    return process.env.VUE_APP_BASE_DOMAIN_URL;
  }

  return 'https://tutorica.vn/';
}

export default {
  url: getDomainUrl(),
}
