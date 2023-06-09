/*
 * @Author: jld
 * @Date: 2023-03-07 19:11:54
 * @LastEditTime: 2023-06-06 14:06:50
 * @LastEditors: atwLee
 * @Description: Layout
 * @FilePath: /umi-custom-menu-tabs/src/layouts/index.tsx
 */

import { Outlet } from '@umijs/max';
import Menu from './Menu';
import Tabs from './Tabs';
import useShowTabs from './hooks/useShowTabs';
import styles from './index.less';

const Layout: React.FC = () => {
  const { useTabs } = useShowTabs(); // 是否显示tabs

  return (
    <div className={styles.layoutContainer}>
      <Menu />
      {useTabs ? <Tabs /> : <Outlet />}
    </div>
  );
};

export default Layout;
