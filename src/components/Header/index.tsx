import { NavItem } from '@/types';
import Link from 'next/link';

export default async function RoyHeader() {
  const data = await getData();
  return (
    <header className="h-16 bg-white dark:bg-gray-900">
      <div className="fixed inset-x-0 top-0 mx-auto my-0 h-16 max-w-8xl ">
        <nav className="flex h-full items-center justify-between">
          <div>图标</div>
          <ul className="flex">
            {data.map((item) => {
              return (
                item.state === 1 && (
                  <li className="px-2.5">
                    <Link
                      className="group relative inline-block h-16  text-lg leading-[4rem] text-slate-800 hover:cursor-pointer hover:text-slate-950 dark:text-slate-200 dark:hover:text-slate-50"
                      href={'/'}
                    >
                      {item.title}
                      <span className="absolute inset-x-0 bottom-0 hidden h-1 w-full bg-blue-600 group-hover:inline-block"></span>
                    </Link>
                  </li>
                )
              );
            })}
          </ul>
          <div>action</div>
        </nav>
      </div>
    </header>
  );
}

async function getData() {
  //todo 请求导航栏配置
  const list: NavItem[] = [
    {
      id: '1',
      title: '首页',
      state: 1,
    },
    {
      id: '2',
      title: '搜索',
      state: 1,
    },
    {
      id: '3',
      title: '关于',
      state: 1,
    },
  ];
  return list;
}
