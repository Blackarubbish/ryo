'use client';

import useScrollY from '@/hooks/useScrollY';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
interface DirItem {
  text: string;
  tagName: string;
  id: string;
}
const PostDir = () => {
  const [dirItems, setDirItems] = useState<DirItem[]>([]);
  const [isExpend, setIsExpend] = useState(true);
  const [activeDir, setActiveDir] = useState('');
  const offsetTopList = useRef<{ id: string; offsetTop: number }[]>([]);
  const pageScrollY = useScrollY();
  const genDir = () => {
    const headings = document.querySelectorAll<HTMLHeadingElement>(
      '.markdown-body [data-name="md-heading"]'
    );
    const tempDirItems: DirItem[] = [];
    headings.forEach((item) => {
      tempDirItems.push({
        text: item.innerText,
        tagName: item.tagName.toLocaleLowerCase(),
        id: item.id,
      });
    });
    setDirItems(tempDirItems);
  };
  const getHeadingOffsetHeight = () => {
    const headings = document.querySelectorAll<HTMLDivElement>(
      ".markdown-body [data-name='md-heading']"
    );
    offsetTopList.current = Array.from(headings).map((item) => ({
      id: item.id,
      offsetTop: item.offsetTop,
    }));
  };
  useEffect(() => {
    genDir();
    getHeadingOffsetHeight();
  }, []);

  useEffect(() => {
    console.log(offsetTopList.current);
    for (let i = 0; i < offsetTopList.current.length; i++) {
      if (
        offsetTopList.current[i].offsetTop < pageScrollY &&
        pageScrollY < offsetTopList.current[i + 1].offsetTop
      ) {
        console.log(offsetTopList.current[i].id);
        setActiveDir(offsetTopList.current[i].id);
      }
    }
  }, [pageScrollY]);

  return (
    <div className="rounded bg-slate-50 px-4 py-2 dark:bg-[#22272e]">
      <div
        className={`mb-2 flex h-14 items-center justify-between ${
          isExpend ? 'border-b border-solid border-inherit' : ''
        }`}
      >
        <span className="text-lg text-ryo-title dark:text-slate-100">目录</span>
        <span
          onClick={() => setIsExpend(!isExpend)}
          className="flex cursor-pointer items-center text-sm text-slate-400"
        >
          {isExpend ? (
            <>
              收起
              <ChevronUp size={14} />
            </>
          ) : (
            <>
              展开
              <ChevronDown size={14} />
            </>
          )}
        </span>
      </div>
      <div
        className={`${
          isExpend ? 'max-h-80' : 'max-h-0'
        } overflow-hidden transition-all delay-100 ease-in-out`}
      >
        <ul className="text-sm">
          {dirItems.map((item, index) => {
            let className = '';
            if (item.tagName === 'h2') {
              className += 'ml-2 pl-1';
            } else if (item.tagName === 'h3') {
              className += 'ml-4 pl-2';
            } else if (item.tagName === 'h4') {
              className += 'ml-6 pl-4';
            } else if (item.tagName === 'h5') {
              className += 'ml-8 pl-6';
            } else if (item.tagName === 'h6') {
              className += 'ml-10 pl-8';
            }
            return (
              <li
                className={`${className} ${
                  activeDir === item.id ? 'bg-sky-100 dark:text-sky-800' : ''
                } rounded-md py-1 text-slate-500 hover:bg-sky-100 dark:text-slate-100 dark:hover:text-sky-800`}
                key={item.id}
              >
                <a
                  title={item.text}
                  className="block w-full truncate pl-2"
                  href={`#${item.id}`}
                >
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PostDir;
