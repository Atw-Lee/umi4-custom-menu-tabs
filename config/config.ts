/*
 * @Author: atwLee
 * @Date: 2023-06-06 11:07:58
 * @LastEditors: atwLee
 * @LastEditTime: 2023-06-06 14:11:29
 * @Description: umi 配置文件
 * @FilePath: /umi-custom-menu-tabs/config/config.ts
 */
import { defineConfig } from '@umijs/max';
import routes from './routes';

export default defineConfig({
  define: {
    'process.env.BASE_URL': '/api', //本地开发地址
  },
  proxy: {
    // 代理
    '/api': {
      target: 'target-url',
      changeOrigin: true,
    },
  },
  antd: {},
  model: {}, // 开启max的model
  request: {}, // 开启max的request
  esbuildMinifyIIFE: true,
  routes: routes,
  npmClient: 'pnpm',
  base: '/',
  publicPath: '/',
});
