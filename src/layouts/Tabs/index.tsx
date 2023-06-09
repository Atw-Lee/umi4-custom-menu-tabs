/*
 * @Author: atwLee
 * @Date: 2023-06-05 15:20:47
 * @LastEditors: atwLee
 * @LastEditTime: 2023-06-06 15:00:20
 * @Description:
 * @FilePath: /umi-custom-menu-tabs/src/layouts/Tabs/index.tsx
 */
import { Tabs } from 'antd';
import { useModel, history } from '@umijs/max';
import useTabsItem from './useTabsItem';
import useShowTabs from '../hooks/useShowTabs';
import styles from './index.less';

function Index() {
  const items = useTabsItem();
  const { tabsHiddenHeader } = useShowTabs(); // 是否显示tabs的header
  const { tabList, setTabList, activeTab, setActiveTab } =
    useModel('useTabList');
  const handleRemoveTab = (key: string) => {
    const tabListTemp = tabList?.filter((i) => i.key !== key);
    setTabList(tabListTemp);
    if (activeTab === key && tabListTemp && tabListTemp?.length > 0)
      setActiveTab(tabListTemp[tabListTemp.length - 1].key);
  };

  return (
    <div className={styles.tabsContainer}>
      <Tabs
        type="editable-card"
        hideAdd
        items={items}
        activeKey={activeTab}
        onTabClick={(key) => {
          history.push(key);
        }}
        onEdit={(event, action) => {
          if (action === 'remove' && typeof event === 'string')
            handleRemoveTab(event);
        }}
        className={tabsHiddenHeader ? styles.tabsHiddenHeader : '123'}
      />
    </div>
  );
}

export default Index;
