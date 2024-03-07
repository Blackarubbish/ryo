import clsx from 'clsx';
import { Home, LayoutGrid } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import style from './index.module.scss';
const menuList = [
  {
    link: '/home',
    title: '首页',
    key: 'home',
    icon: Home,
  },
  {
    link: '/about',
    title: '分类',
    key: 'about',
    icon: LayoutGrid,
  },
];

const Menu = () => {
  const pathname = usePathname();
  return (
    <ul className={style.menuWrapper}>
      {menuList.map((item) => {
        return (
          <li
            key={item.key}
            className={clsx({
              [style.active]: pathname.startsWith(item.link),
            })}
          >
            <Link className={style.link} href={item.link}>
              <i>
                <item.icon
                  strokeWidth={pathname.startsWith(item.link) ? '2.5px' : '2px'}
                  size={20}
                />
              </i>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
