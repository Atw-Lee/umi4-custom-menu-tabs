/*
 * @Author: atwLee
 * @Date: 2023-06-05 14:57:39
 * @LastEditors: atwLee
 * @LastEditTime: 2023-06-06 15:00:37
 * @Description: 通过url判断是否显示menu菜单
 * @FilePath: /umi-custom-menu-tabs/src/layouts/hooks/useShowMenu.ts
 */
import { useSearchParams } from '@umijs/max';

function useShowMenu() {
  const [searchParams] = useSearchParams();
  const showMenu = searchParams.get('menu');
  return showMenu === 'none' ? false : true;
}

export default useShowMenu;
