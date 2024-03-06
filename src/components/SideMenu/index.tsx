'use client';

import { AppContext } from '@/app/providers';
import avatarBg from '@/assets/imgs/avatar-bg2.jpg';
import { Button } from '@nextui-org/button';
import clsx from 'clsx';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useContext } from 'react';
import Menu from './Menu';
import './index.scss';
const RyoMenu = () => {
  const { isShowMenu, setIsShowMenu } = useContext(AppContext);
  const onToggle = () => {
    setIsShowMenu(!isShowMenu);
  };
  return (
    <aside
      className={clsx('side-menu', {
        ['hide-menu']: !isShowMenu,
      })}
    >
      <Button className="meunu-toggle" onClick={onToggle}>
        <X size={18} strokeWidth="6px">
          {isShowMenu ? '关闭' : '开启'}
        </X>
      </Button>
      <Image className="w-full" src={avatarBg} alt="avatar" />
      <Menu />
    </aside>
  );
};

export default RyoMenu;
