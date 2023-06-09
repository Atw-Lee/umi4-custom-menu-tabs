/*
 * @Author: atwLee
 * @Date: 2023-06-05 10:57:48
 * @LastEditors: atwLee
 * @LastEditTime: 2023-06-06 14:24:11
 * @Description: menu菜单组件
 * @FilePath: /umi-custom-menu-tabs/src/layouts/Menu/index.tsx
 */
import { Button, Menu, MenuProps } from 'antd';
import { useEffect, useState } from 'react';
import { history, useLocation } from '@umijs/max';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import routes from '../../../config/routes';
import useShowMenu from '../hooks/useShowMenu';
import styles from './index.less';

type RoutesType = {
  path: string;
  name: string;
  routes?: RoutesType[];
};

function Index() {
  const showMenu = useShowMenu(); // 是否显示menu
  const [menuList, setMenuList] = useState<ItemType[]>([]); // 菜单list
  const [collapsed, setCollapsed] = useState(false); // 菜单折叠状态
  const location = useLocation();
  // 递归get菜单
  const recursion = (routes: RoutesType[]) => {
    let result: MenuProps['items'] = [];
    for (let i = 0; i < routes.length; i++) {
      const nextRoutes = routes[i];
      const item = {
        label: nextRoutes.name,
        key: nextRoutes.path,
        icon: <SettingOutlined />,
        children: nextRoutes.routes ? recursion(nextRoutes.routes) : null,
      };
      result.push(item);
    }
    return result;
  };

  // 设置菜单list
  useEffect(() => {
    setMenuList(recursion(routes));
  }, []);

  // 菜单折叠按钮的click
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  // 菜单的click
  const handleMenuClick = ({ key }: { key: string }) => {
    history.push(key);
  };

  return showMenu ? (
    <div
      className={styles.menuWrapper}
      style={collapsed ? { width: '80px' } : { width: '12vw' }}
    >
      <Menu
        items={menuList}
        mode="inline"
        inlineCollapsed={collapsed}
        onClick={handleMenuClick}
        defaultSelectedKeys={[location.pathname]}
      />
      <Button type="primary" onClick={toggleCollapsed}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
    </div>
  ) : null;
}

export default Index;
