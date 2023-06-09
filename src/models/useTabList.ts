/*
 * @Author: atwLee
 * @Date: 2023-04-20 16:50:30
 * @LastEditors: atwLee
 * @LastEditTime: 2023-06-06 15:00:08
 * @Description:
 * @FilePath: /umi-custom-menu-tabs/src/models/useTabList.ts
 */
// 全局共享数据示例
import { useState } from 'react';
import type { PanUITabsProps } from '@panui/base';

const useTabList = () => {
  const [tabList, setTabList] = useState<PanUITabsProps['items']>();
  const [activeTab, setActiveTab] = useState<string>();
  return {
    tabList,
    setTabList,
    activeTab,
    setActiveTab,
  };
};
export default useTabList;
