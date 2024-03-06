'use client';
import { Button } from '@nextui-org/button';
import { Listbox, ListboxItem } from '@nextui-org/listbox';
import { Spinner } from '@nextui-org/spinner';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import style from './index.module.scss';

// const Posts = [
//   {
//     key: '1232',
//     title: 'title1',
//   },
//   {
//     key: '233',
//     title: 'title2',
//   },
//   {
//     key: '233a',
//     title: 'title2',
//   },
//   {
//     key: '233s',
//     title: 'title2',
//   },
//   {
//     key: '233c',
//     title: 'title2',
//   },
//   {
//     key: '2331',
//     title: 'title2',
//   },
//   {
//     key: '23s3',
//     title: 'title2',
//   },
//   {
//     key: '23s13',
//     title: 'title2',
//   },
//   {
//     key: '23112sd3g',
//     title: 'title2',
//   },
//   {
//     key: '23112sd34',
//     title: 'title2',
//   },
//   {
//     key: '23112sd33',
//     title: 'title2',
//   },
//   {
//     key: '23112sd31',
//     title: 'title2',
//   },
//   {
//     key: '23112sd3a',
//     title: 'title2',
//   },
//   {
//     key: '23112sd3s',
//     title: 'title2',
//   },
// ];

const Posts: any[] = [];
const SearchBar = () => {
  const router = useRouter();
  const [isShowInput, setIsShowInput] = useState(false);
  const [searchText, setSearchText] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<any[]>([]);

  const inputDom = useRef<HTMLInputElement>(null);

  const getSearchRes = useDebouncedCallback(async (keyword: string) => {
    console.log('getSearchRes');
    setIsLoading(true);
    setPosts([]);
    const postsList = await new Promise<any[]>((r) => {
      setTimeout(() => {
        r(Posts);
      }, 1.5 * 1000);
    });
    setPosts(postsList);
    setIsLoading(false);
  }, 300);
  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchText(e.target.value);
    if (e.target.value.trim() !== '') {
      getSearchRes(e.target.value);
    }
  };

  const toggleShowInput = () => setIsShowInput(!isShowInput);

  useEffect(() => {
    if (!isShowInput) {
      setSearchText('');
      setPosts([]);
    } else {
      inputDom.current && inputDom.current.focus();
    }
  }, [isShowInput]);

  useEffect(() => {
    if (!!searchText.trim()) {
      setPosts([]);
    }
  }, [searchText]);
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
          onBlur={() => {
            setTimeout(() => {
              // setIsShowInput(false);
            });
          }}
          ref={inputDom}
          type="text"
          placeholder="输出关键字"
        />
        <AnimatePresence>
          {!!searchText && (
            <motion.div
              initial={{ scale: '95%', translateY: '5%', opacity: 0.2 }}
              whileInView={{ scale: '100%', translateY: '0%', opacity: 1 }}
              exit={{ scale: '95%', translateY: '5%', opacity: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: [0.2, 0.88, 0.32, 1.1], // 回弹效果
              }}
              className={clsx(style.searchResult, 'rounded-md shadow-md')}
            >
              {isLoading ? (
                <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <Spinner label="加载中..." />
                </div>
              ) : (
                <Listbox
                  onAction={(key) => {
                    setIsShowInput(false);
                    window.open(`/posts/${key}`, '_blank');
                  }}
                  aria-label="Listbox with search result"
                  items={posts}
                  emptyContent={<div>找不到相关内容..😫</div>}
                >
                  {(item) => (
                    <ListboxItem key={item.key} color="primary">
                      {item.title}
                    </ListboxItem>
                  )}
                </Listbox>
              )}
            </motion.div>
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
