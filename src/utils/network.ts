/*
 * @Date: 2021-05-12 11:33:29
 * @LastEditors: atwLee
 * @LastEditTime: 2023-06-06 14:57:23
 * @FilePath: /umi-custom-menu-tabs/src/utils/network.ts
 * @Description: network的相关配置方法工具
 */
import { notification } from '@panui/base';
import { AxiosResponse } from '@umijs/max';

type IErrorInterceptor = (error: Error) => Promise<Error>;
type IResponseInterceptor = <T = any>(
  response: AxiosResponse<T>,
) => AxiosResponse<T>;
interface NetWorkConfig {
  baseUrl: string | undefined; // 请求的baseUrl
  responseInterceptors: [IResponseInterceptor, IErrorInterceptor]; // 请求返回的拦截器
}

const config: NetWorkConfig = {
  baseUrl: process.env.BASE_URL,
  responseInterceptors: [
    // https://umijs.org/docs/max/request#responseinterceptors
    (response) => {
      return response;
    },
    (error) => {
      if (error.message) {
        notification.error({
          description: `${error.message}服务器返回异常`,
          message: '服务器异常',
        });
      }
      return Promise.reject(error);
    },
  ],
};

export default config;
