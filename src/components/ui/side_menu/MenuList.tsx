import { classManage } from '@/lib/utils';
import { Home, LayoutGrid } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const menuList = [
  {
    link: '/',
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
    <ul className="m-0 h-[300px] min-h-[calc(100%-115px)] list-none px-0 py-[12px] leading-[44px]">
      {menuList.map((item) => {
        return (
          <li
            key={item.key}
            className={classManage(
              'cursor-pointer px-[20px] py-0 text-[#727272] hover:bg-gray-100 hover:text-[#3f51b5]',
              pathname.startsWith(item.link) && 'bg-gray-200 text-[#3f51b5]'
            )}
          >
            <Link
              className="relative block h-[44px] pl-[48px] text-[15px] font-medium leading-[44px] no-underline"
              href={item.link}
            >
              <i className="absolute left-0 top-[50%] translate-y-[-50%] leading-inherit">
                <item.icon
                  strokeWidth={pathname.startsWith(item.link) ? '2.5px' : '2px'}
                  size={20}
                />
              </i>
              <span>{item.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
