'use client';
import { Posts } from '@/types';
import { Button } from '@nextui-org/button';
import PostCard from './PostCard';
interface Props {
  posts: Posts[];
}
const PostsContainer = (props: Props) => {
  const { posts } = props;
  const tabs = [
    {
      title: '推荐',
      id: '1',
    },
    {
      title: '最新',
      id: '2',
    },
  ];
  return (
    <div className="mr-[23.33rem] w-[900px] rounded bg-white shadow-lg dark:bg-slate-900">
      <Button color="primary">this is a button</Button>
      <ul className="  rounded">
        {posts.map((item) => {
          return (
            <li key={item.id}>
              <PostCard data={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostsContainer;
