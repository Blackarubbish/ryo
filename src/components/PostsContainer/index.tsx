'use client';
import { Tab } from '@headlessui/react';
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
const PostsContainer = () => {
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
    <div className="mr-[23.33rem] h-80 w-[900px] rounded bg-slate-50 dark:bg-slate-900 ">
      <Tab.Group>
        <Tab.List className="flex h-11  border-b border-solid border-gray-200">
          {tabs.map((item) => {
            return (
              <Tab
                key={item.id}
                className={() => {
                  return `p-4 text-slate-900 outline-none dark:text-slate-50 `;
                }}
              >
                {({ selected }) => {
                  return (
                    <div
                      className={
                        selected
                          ? 'border-b-2 border-solid border-blue-700'
                          : 'hover:text-blue-700'
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
      <div className="h-60  rounded"></div>
    </div>
  );
};

export default PostsContainer;
