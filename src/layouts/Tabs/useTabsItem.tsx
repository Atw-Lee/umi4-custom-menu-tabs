/*
 * @Author: atwLee
 * @Date: 2023-06-05 15:42:10
 * @LastEditors: atwLee
 * @LastEditTime: 2023-06-09 18:01:28
 * @Description:
 * @FilePath: /umi-custom-menu-tabs/src/layouts/Tabs/useTabsItem.tsx
 */
import { useCallback, useEffect, useMemo } from 'react';
import { useModel, useLocation } from '@umijs/max';
import loadable from '@loadable/component';
import routes from '../../../config/routes';

type RoutesType = {
  path: string;
  name: string;
  component?: string;
  routes?: RoutesType[];
};

function useTabsItem() {
  const { tabList, setTabList, setActiveTab } = useModel('useTabList');
  const AsyncPage = loadable(
    (props: { page: string }) => import(`../../pages${props.page}`),
  );
  const location = useLocation();

  // 路由展开为叶子平级结构
  const leafRoutes = useMemo(() => {
    let result: RoutesType[] = [];
    const recursion = (arr: RoutesType[]) => {
      for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (item.routes) {
          result.concat(recursion(item.routes));
        }
        result.push(item);
      }
      return result;
    };
    return recursion(routes);
  }, []);

  // 过滤出来动态路由
  const dynamicRoutes = useMemo(() => {
    const arr = leafRoutes.filter((i) => {
      return i.path.indexOf('/:') > -1;
    });
    return arr.map((i) => ({ ...i, dynamic: i.path.split('/:')[0] }));
  }, [leafRoutes]);

  // 找一下动态路由
  const handleDynamic = useCallback((pathname: string) => {
    return dynamicRoutes.find((i) => pathname.indexOf(i.dynamic) > -1);
  }, []);

  useEffect(() => {
    const { pathname } = location;
    const { name, component } =
      leafRoutes.find((i) => i.path === pathname) ??
      handleDynamic(pathname) ??
      {};
    const componentUrl = component?.split('@/pages')[1];
    // 如果没有，就添加到tabList
    if (!tabList?.some((i) => i.key === pathname)) {
      setTabList([
        ...(tabList ?? []),
        {
          key: pathname,
          label: name,
          children: componentUrl && <AsyncPage page={componentUrl} />,
          forceRender: true,
        },
      ]);
    }
    setActiveTab(pathname);
  }, [location]);

  return tabList;
}

export default useTabsItem;
