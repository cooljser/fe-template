import instance from './axiosInstance';
import {AxiosRequestConfig} from 'axios';

const service = {
  hello: (config?: AxiosRequestConfig) => {
    return instance.get('/hello', config);
  },

  test: (config?: AxiosRequestConfig) => {
    return instance.post('/test', config);
  }
};

export default service;
