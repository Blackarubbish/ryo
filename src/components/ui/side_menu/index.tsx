'use client';

import { AppContext } from '@/app/providers';
import avatarBg from '@/assets/imgs/avatar-bg2.jpg';
import { classManage } from '@/lib/utils';
import { Button } from '@nextui-org/button';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useContext } from 'react';
import Menu from './MenuList';
const RyoMenu = () => {
  const { isShowMenu, setIsShowMenu } = useContext(AppContext);
  const onToggle = () => {
    setIsShowMenu(!isShowMenu);
  };
  return (
    <aside
      className={classManage(
        'ease-[cubic-bezier(0.18, 0.81, 0.3, 0.89)] fixed inset-y-0 left-0 z-50 min-h-full w-[260px] bg-white shadow-lg transition-all duration-400',
        !isShowMenu && 'translate-x-[-100%] [&+#ryo-main]:pl-0',
        'side-menu'
      )}
    >
      <Button
        className={classManage(
          'absolute left-full top-0 z-50 flex  h-[56px] w-[56px] cursor-pointer items-center justify-center bg-transparent text-center leading-[56px] text-white transition-all duration-400 ease-in-out',
          !isShowMenu && 'scale-0',
          'meunu-toggle'
        )}
        onClick={onToggle}
      >
        <X size={18} strokeWidth="6px"></X>
      </Button>
      <Image className="w-full" src={avatarBg} alt="avatar" />
      <Menu />
    </aside>
  );
};

export default RyoMenu;
