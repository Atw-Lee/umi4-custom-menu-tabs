/*
 * @Author: atwLee
 * @Date: 2023-06-05 09:09:56
 * @LastEditors: atwLee
 * @LastEditTime: 2023-06-06 14:55:18
 * @Description: 运行时配置文件
 * @FilePath: /umi-custom-menu-tabs/src/app.ts
 */

import { RequestConfig } from '@umijs/max';
import network from './utils/network';
import './index.less';

// 进行网络请求的默认配置
export const request: RequestConfig = {
  timeout: 1000,
  baseURL: network.baseUrl,
  headers: {},
  requestInterceptors: [],
  responseInterceptors: [network.responseInterceptors], // 返回的拦截器,
};
