'use client';
import { NavItem } from '@/types';
import { debounce } from '@/utils/function';
import { Switch } from '@headlessui/react';
import { Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
function getData() {
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
export default function RoyHeader() {
  const [enabled, setEnabled] = useState(false);
  const [isShowHeader, setIsShowHeader] = useState(true);
  const dom = useRef<HTMLDivElement | null>(null);
  const data = getData();
  const onScrooll = useCallback(
    debounce(() => {
      if (window.scrollY > 150 && dom.current) {
        console.log(window.scrollY);
        setIsShowHeader(false);
      } else {
        setIsShowHeader(true);
      }
    }, 200),
    []
  );
  useEffect(() => {
    if (enabled) {
      document.body.setAttribute('data-mode', 'dark');
    } else {
      document.body.setAttribute('data-mode', 'light');
    }
  }, [enabled]);
  useEffect(() => {
    const bodyEle = document.body;
    console.log(bodyEle);
    bodyEle.onscroll = onScrooll;
    // documentEle.addEventListener('scroll', onScrooll);
    return () => {
      bodyEle.removeEventListener('scroll', onScrooll);
    };
  }, []);
  return (
    <header className=" h-16  font-semibold ">
      <div
        ref={dom}
        className={`${
          isShowHeader
            ? 'translate-y-0 transition-all duration-500'
            : '-translate-y-full transition-all duration-500'
        } from-up-to-bottom fixed inset-x-0 top-0 z-50 border-b border-solid border-slate-200 bg-slate-50 shadow-md  transition-all dark:bg-slate-900`}
      >
        <div className=" mx-auto my-0 h-16 max-w-8xl ">
          <nav className=" mx-auto my-0 flex h-full max-w-7xl items-center justify-between">
            <div>图标</div>
            <ul className="flex">
              {data.map((item) => {
                return (
                  item.state === 1 && (
                    <li key={item.id} className="px-2.5">
                      <Link
                        className="group relative inline-block h-16  text-lg leading-[4rem] text-ryo-title hover:cursor-pointer hover:text-ryo-bg-sub2 dark:text-slate-200 dark:hover:text-slate-50"
                        href={'/'}
                      >
                        {item.title}
                        <span className="absolute inset-x-0 bottom-0 hidden h-1 w-full bg-ryo-bg-sub2 group-hover:inline-block"></span>
                      </Link>
                    </li>
                  )
                );
              })}
            </ul>
            <div>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled
                    ? 'border-black bg-gray-600'
                    : 'border-inherit bg-gray-300'
                }  relative  inline-flex h-6 w-11 items-center rounded-full border border-solid hover:border-blue-500`}
              >
                <span className="sr-only">Enable notifications</span>
                <div
                  className={`${
                    enabled
                      ? 'translate-x-[22px]  bg-gray-900'
                      : 'translate-x-0.5 bg-gray-50'
                  } flex h-[18px] w-[18px] transform items-center justify-center rounded-[50%]  transition`}
                >
                  {enabled ? (
                    <Moon
                      size={16}
                      className=" text-gray-200"
                      strokeWidth={2}
                    />
                  ) : (
                    <Sun size={16} strokeWidth={2} />
                  )}
                </div>
              </Switch>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
