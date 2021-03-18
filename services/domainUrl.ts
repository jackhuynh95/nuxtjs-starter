function getDomainUrl() {
  if (process.env.VUE_APP_BASE_DOMAIN_URL) {
    return process.env.VUE_APP_BASE_DOMAIN_URL;
  }

  return '';
}

export default {
  url: getDomainUrl(),
}
