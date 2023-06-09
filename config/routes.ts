/*
 * @Author: atwLee
 * @Date: 2023-06-05 10:03:16
 * @LastEditors: atwLee
 * @LastEditTime: 2023-06-06 11:38:37
 * @Description:
 * @FilePath: /umi-custom-menu-tabs/config/routes.ts
 */
export default [
  {
    path: '/',
    name: '页面',
    routes: [
      {
        name: ' 页面1',
        path: '/page1',
        component: '@/pages/Page1',
      },
      {
        name: ' 页面2',
        path: '/page2',
        component: '@/pages/Page2',
      },
    ],
  },
  {
    name: ' 页面3',
    path: '/page3',
    component: '@/pages/Page3',
  },
];
