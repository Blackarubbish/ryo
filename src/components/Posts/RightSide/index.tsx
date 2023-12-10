'use client';
import useHtmlEnvet from '@/hooks/useScroll';
import { useRef } from 'react';
import PostDir from './PostDir';
const PostRightSize = () => {
  const sideContentDom = useRef<HTMLDivElement | null>(null);
  useHtmlEnvet(null, 'scroll', () => {
    if (!sideContentDom.current) return;
    if (window.scrollY > 150) {
      sideContentDom.current.style.position = 'fixed';
      sideContentDom.current.style.top = '20px';
    } else {
      sideContentDom.current.style.position = 'static';
    }
  });
  return (
    <div className="absolute bottom-0 right-0 top-0 w-[21.66rem]">
      <div className="w-[21.66rem]" ref={sideContentDom}>
        <PostDir />
      </div>
    </div>
  );
};

export default PostRightSize;
