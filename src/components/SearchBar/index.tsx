'use client';
import { Button } from '@nextui-org/button';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { ChangeEventHandler, useEffect, useState } from 'react';
import style from './index.module.scss';
const SearchBar = () => {
  const [isShowInput, setIsShowInput] = useState(false);
  const [searchText, setSearchText] = useState('');

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchText(e.target.value);
  };

  const toggleShowInput = () => setIsShowInput(!isShowInput);

  useEffect(() => {
    if (!isShowInput) {
      setSearchText('');
    }
  }, [isShowInput]);
  return (
    <div
      className={clsx(style.searchBar)}
      style={{
        width: isShowInput ? '345px' : 'auto',
      }}
    >
      <div
        className={clsx(style.inputContent, {
          [style.inputContentShow]: isShowInput,
        })}
      >
        <input
          value={searchText}
          onChange={onInputChange}
          type="text"
          placeholder="输出关键字"
        />
        <AnimatePresence>
          {!!searchText && (
            <motion.div
              initial={{ translateY: '15%', opacity: 0.2 }}
              whileInView={{ translateY: '0%', opacity: 1 }}
              exit={{ translateY: '15%', opacity: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: [0.2, 0.88, 0.32, 1.1], // 回弹效果
              }}
              className={style.searchResult}
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
      <Button
        onClick={toggleShowInput}
        variant="solid"
        isIconOnly
        className={style.searchButton}
      >
        <Search color="#fff" strokeWidth="3px" />
      </Button>
    </div>
  );
};

export default SearchBar;
