import axios from 'axios';

axios.defaults.headers['Content-Type'] = 'application/json';

export const axiosInstance = axios.create({
  baseURL: '/insight/api',
  timeout: 1000 * 40,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;
