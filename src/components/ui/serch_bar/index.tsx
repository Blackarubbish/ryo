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
      className="relative flex min-w-[56px] justify-end"
      style={{
        width: isShowInput ? '345px' : 'auto',
      }}
    >
      <div
        className={clsx(
          'absolute right-0 top-0 mb-0 ml-0 mr-[12px] mt-[12px] h-[36px] border-b-2 border-solid border-white transition-all duration-250 ease-in-out',
          isShowInput ? 'w-[320px]' : 'w-0'
        )}
      >
        <input
          value={searchText}
          className="h-full w-full pr-[32px]"
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
              className="absolute top-[40px] max-h-[400px] min-h-[220px] w-full overflow-auto rounded-md border border-solid border-[#dedede] bg-white px-[3px] py-[10px] text-[#11181c] shadow-md"
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
        className="flex h-[56px] w-[56px] items-center justify-center rounded-[50%] bg-transparent"
      >
        <Search color="#fff" strokeWidth="3px" />
      </Button>
    </div>
  );
};

export default SearchBar;
