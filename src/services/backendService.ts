import instance from './axiosInstance';

const service = {
  list: () => instance.get('/list')
};

export default service;
