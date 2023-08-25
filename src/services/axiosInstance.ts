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

// request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
