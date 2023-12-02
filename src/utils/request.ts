import type {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import axios from 'axios';

const requestInstance = axios.create({
  baseURL: '/',
  timeout: 1000 * 10,
  withCredentials: true,
});

interface CommonRes<T> {
  code: number;
  data: T;
  msg: string;
}

requestInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

requestInstance.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    return response;
  },
  (error) => {
    const { status } = error.response;
    const { stat, msg } = error.response.data;
    if (stat && msg && status) {
      return Promise.reject(error);
    } else {
      return Promise.reject(error);
    }
  }
);

const request = async <T>(config: AxiosRequestConfig) => {
  try {
    const res = await requestInstance.request<CommonRes<T>>({
      ...config,
    });
    return res.data;
  } catch (error) {
    return undefined;
  }
};

export default request;
