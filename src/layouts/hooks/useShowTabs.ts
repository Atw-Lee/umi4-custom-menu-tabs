/*
 * @Author: atwLee
 * @Date: 2023-06-05 14:57:39
 * @LastEditors: atwLee
 * @LastEditTime: 2023-06-06 15:00:40
 * @Description: 通过url判断是否显示tabs页签
 * @FilePath: /umi-custom-menu-tabs/src/layouts/hooks/useShowTabs.ts
 */
import { useSearchParams } from '@umijs/max';

function useShowTabs() {
  const [searchParams] = useSearchParams();
  const showTabs = searchParams.get('tabs');
  const tabsHeader = searchParams.get('tabsHeader');
  return {
    useTabs: showTabs === 'none' ? false : true,
    tabsHiddenHeader: tabsHeader === 'none' ? true : false,
  };
}

export default useShowTabs;
