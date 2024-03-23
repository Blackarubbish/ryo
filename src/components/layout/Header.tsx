'use client';
import { AppContext } from '@/app/providers';

import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useContext } from 'react';
import SearchBar from '../ui/serch_bar';

export default function RoyHeader() {
  const { setIsShowMenu } = useContext(AppContext);
  const showMenu = () => setIsShowMenu(true);
  return (
    <>
      <header className="fixed left-0 top-0 z-40 h-[56px] w-full bg-[#3f51b5] text-white transition-spacing">
        <div className="flex">
          <div
            onClick={showMenu}
            className="flex h-[56px] w-[56px] cursor-pointer items-center justify-center bg-transparent text-center leading-[56px]"
          >
            <Menu size={25} strokeWidth="3px" />
          </div>
          <div className="invisible flex-1 whitespace-nowrap text-center text-[16px] font-normal">
            躲在草丛里
          </div>
          <SearchBar />
        </div>
      </header>
      <header className="relative ml-[-240px] bg-[#3f51b5] pb-[48px] pl-[256px] pr-[16px] pt-[104px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="mx-auto my-0 w-[960px] text-white transition-all">
            <h1 className="text-[44px] font-medium leading-[48px]">
              躲在草丛里
            </h1>
            <h5 className=" pt-[6px] text-[16px] font-light leading-[24px] text-[#c5cae9]">
              只因你实在是太美
            </h5>
          </div>
        </motion.div>
      </header>
    </>
  );
}
