'use client';

import { AppContext } from '@/app/providers';
import avatarBg from '@/assets/imgs/avatar-bg2.jpg';
import { classManage } from '@/lib/utils';
import { Button } from '@nextui-org/button';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useContext, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import Menu from './MenuList';
const RyoMenu = () => {
  const { isShowMenu, setIsShowMenu } = useContext(AppContext);
  const onToggle = () => {
    setIsShowMenu(!isShowMenu);
  };
  const handleResize = useDebouncedCallback(() => {
    console.log('handle', window.innerWidth);
    if (window.innerWidth < 1200 && isShowMenu) {
      setIsShowMenu(false);
    }
  }, 300);
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);
  return (
    <>
      {isShowMenu && (
        <div
          aria-label="mask"
          onClick={() => setIsShowMenu(false)}
          className="fixed z-50 h-[100vh] w-[100vw] bg-black/30 lg:hidden"
        ></div>
      )}
      <aside
        className={classManage(
          'ease-[cubic-bezier(0.18, 0.81, 0.3, 0.89)] fixed inset-y-0 left-0 z-50 min-h-full w-[260px] bg-white shadow-lg transition-all duration-400',
          !isShowMenu && 'translate-x-[-100%] lg:[&+#ryo-main]:pl-0'
        )}
      >
        <Button
          className={classManage(
            'absolute left-full top-0 z-50 hidden h-[56px] w-[56px]  cursor-pointer items-center justify-center bg-transparent text-center leading-[56px] text-white transition-all duration-400 ease-in-out lg:flex lg:scale-100',
            !isShowMenu && 'lg:scale-0',
            'meunu-toggle'
          )}
          onClick={onToggle}
        >
          <X size={18} strokeWidth="6px"></X>
        </Button>
        <Image className="w-full" src={avatarBg} alt="avatar" />
        <Menu />
      </aside>
    </>
  );
};

export default RyoMenu;
