'use client';
import { Posts } from '@/types';
import { Tab } from '@headlessui/react';
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
      <Tab.Group>
        <Tab.List className="flex h-11  border-b border-solid border-gray-200">
          {tabs.map((item) => {
            return (
              <Tab
                key={item.id}
                className={() => {
                  return `p-4 text-slate-800 outline-none dark:text-slate-50 `;
                }}
              >
                {({ selected }) => {
                  return (
                    <div
                      className={
                        selected
                          ? 'border-b-2 border-solid border-ryo-title text-ryo-title'
                          : 'hover:text-ryo-title'
                      }
                    >
                      {item.title}
                    </div>
                  );
                }}
              </Tab>
            );
          })}
        </Tab.List>
      </Tab.Group>
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
