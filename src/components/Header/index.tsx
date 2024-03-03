'use client';
import { AppContext } from '@/app/providers';
import style from './index.module.scss';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useContext } from 'react';
import SearchBar from '../SearchBar';

export default function RoyHeader() {
  const { setIsShowMenu } = useContext(AppContext);
  const showMenu = () => setIsShowMenu(true);
  return (
    <>
      <header className={style.topHeader}>
        <div className="flex">
          <div onClick={showMenu} className={style.menuIcon}>
            <Menu size={25} strokeWidth="3px" />
          </div>
          <div className={clsx(style.topHeaderTitle, 'flex-1')}>躲在草丛里</div>
          <SearchBar />
        </div>
      </header>
      <header className={style.header}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className={style.headerContent}>
            <h1>躲在草丛里</h1>
            <h5 className={style.subtitle}>学而不思则罔</h5>
          </div>
        </motion.div>
      </header>
    </>
  );
}
