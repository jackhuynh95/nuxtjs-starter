import axios from 'axios';

export default axios.create({
  baseURL: process.env.VUE_APP_BASE_API_URL,
  // withCredentials: true,
});