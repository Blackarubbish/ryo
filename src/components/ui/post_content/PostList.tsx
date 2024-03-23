'use client';

import { Post } from '@/types';
import { Pagination } from '@nextui-org/pagination';
import { useRouter } from 'next/navigation';
import PostCard from './PostCard';
interface Props {
  postList: Post[];
  current: number;
}
const PostList = (props: Props) => {
  const { postList, current } = props;
  const router = useRouter();
  const onPageNumChange = (pageNum: number) => {
    setTimeout(() => {
      router.push(`/page/${pageNum}`);
    }, 100);
  };
  return (
    <>
      <ul>
        {postList.map((item) => {
          return (
            <li className="mb-[25px]" key={item.id}>
              <PostCard post={item} />
            </li>
          );
        })}
      </ul>
      <div className="flex justify-center">
        <Pagination
          onChange={onPageNumChange}
          showControls
          total={2}
          initialPage={Number(current)}
        />
      </div>
    </>
  );
};

export default PostList;
