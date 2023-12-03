'use client';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import { useState } from 'react';

import gitDark from '@/assets/imgs/gitHub-dark.png';
import gitLight from '@/assets/imgs/gitHub-light.png';
import giteeDark from '@/assets/imgs/gitee-dark.png';
import giteeLight from '@/assets/imgs/gitee-light.png';
import juejinDark from '@/assets/imgs/juejin-dark.png';
import juejinLight from '@/assets/imgs/juejin-light.png';
import avatar from '@/assets/imgs/ryo.png';
const RightSide = () => {
  const [isShowing, setIsShowing] = useState(false);
  const links = [
    {
      link: '/',
      name: 'juejin',
      icons: {
        dark: juejinDark,
        light: juejinLight,
      },
    },
    {
      link: '/',
      name: 'github',
      icons: {
        dark: gitDark,
        light: gitLight,
      },
    },
    {
      link: '/',
      name: 'gitee',
      icons: {
        dark: giteeDark,
        light: giteeLight,
      },
    },
  ];
  return (
    <div className="absolute right-0 top-0 w-[21.66rem]">
      <Transition
        appear={true}
        show={true}
        enter="transform duration-200 transition ease-in-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 rotate-0 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="opacity-100 rotate-0 scale-100 "
        leaveTo="opacity-0 scale-95 "
      >
        <div className="flex flex-col items-center rounded bg-white shadow-lg dark:bg-slate-900">
          <div className="mt-5 rounded-[50%]">
            <Image
              src={avatar}
              sizes="100"
              alt="网站作者头像"
              className="h-20 w-20 rounded-[50%] border-2 border-solid border-pink-200 shadow-sm  shadow-pink-200/50 dark:border-blue-200 dark:shadow-xl dark:shadow-blue-200/50"
            />
          </div>
          <div className="my-2 text-lg font-extrabold text-ryo-title">
            用户名称
          </div>
          <div className="line-clamp-2 px-4 text-xs text-gray-400">
            按时打卡圣诞节客户啊可是大家哈萨克接电话
          </div>
          <div className="mt-2 flex w-full justify-center border-t border-solid border-inherit p-2 px-4">
            {links.map((item) => {
              return (
                <a
                  className="mr-4 cursor-pointer rounded p-2 hover:bg-slate-200 dark:hover:bg-slate-600"
                  key={item.name}
                >
                  <Image
                    className="hidden h-5 w-5 dark:block"
                    src={item.icons.dark}
                    sizes="100"
                    alt="网站图标"
                  />
                  <Image
                    src={item.icons.light}
                    className="h-5 w-5 dark:hidden"
                    sizes="100"
                    alt="网站图标"
                  />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 rounded bg-white p-2 shadow-lg shadow-pink-400/50 dark:bg-slate-900 dark:shadow-blue-200/50">
          <div className="text-ryo-title">留言板:</div>
          <div className="h-9 min-h-[100px] rounded-xl border-2 border-solid border-blue-200 p-2 text-gray-800 dark:text-gray-100">
            kasjdkajshdkjashdkj
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default RightSide;
