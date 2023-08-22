import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

export const baseURL = '/backend';

export const instance = axios.create({
  baseURL,
  timeout: 1000 * 40, // 20s
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  }
}) as ConvertedAxiosInstance;

export const fileInstance = axios.create({
  baseURL,
  timeout: 1000 * 40, // 20s
  withCredentials: true,
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}) as ConvertedAxiosInstance;

interface ConvertedAxiosInstance extends Omit<AxiosInstance, 'request'|'get'|'delete'|'head'|'options'|'post'|'put'|'patch'> {
  request<T> (config: AxiosRequestConfig): Promise<T>;
  get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  head<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  options<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
}

export default instance;
