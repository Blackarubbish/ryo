import { Posts } from '@/types';
import { Transition } from '@headlessui/react';
import { Clock4, Eye, ThumbsUp } from 'lucide-react';
import { useRouter } from 'next/navigation';
interface Props {
  data: Posts;
}
const PostCard = (props: Props) => {
  const { data } = props;
  const labels = ['js', 'javascript', 'go'];
  const footerConfig = [
    {
      id: 'view',
      icon: Eye,
    },
    {
      id: 'like',
      icon: ThumbsUp,
    },
    {
      id: 'ctime',
      icon: Clock4,
    },
  ];
  const router = useRouter();
  const toPost = () => router.push(`/posts/${data.id}`);
  return (
    <Transition
      appear={true}
      show={true}
      enter="transform duration-200 transition ease-in-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 rotate-0 scale-100"
      leave="transform duration-200 transition ease-in-out"
      leaveFrom="opacity-100 rotate-0 scale-100 "
      leaveTo="opacity-0 scale-95 "
    >
      <div
        onClick={toPost}
        className="cursor-pointer px-5  pt-3 opacity-75 hover:bg-slate-200"
      >
        <div className="flex border-b border-solid border-inherit pb-3 ">
          <div className="w-0 flex-auto">
            <div className="mt-0.5 text-ryo-title">
              <a href="#" className="text-lg font-semibold">
                标题
              </a>
            </div>
            <div className="m-2 truncate text-sm text-ryo-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              minus officiis non amet unde molestias neque quis at facilis nulla
              distinctio sequi, animi assumenda in ut qui exercitationem libero
              veritatis.
            </div>
            <div className="flex items-center justify-between">
              <ul className="flex items-center text-sm">
                {footerConfig.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="mr-6 flex items-center justify-center leading-5 text-slate-600"
                    >
                      <item.icon size={16} />
                      <span className="ml-0.5">100</span>
                    </li>
                  );
                })}
              </ul>
              <div>
                {labels.map((item) => {
                  return (
                    <a
                      href="#"
                      className="ml-2 max-w-[80px] rounded-sm bg-ryo-bg-sub2 px-2 py-0.5 text-xs hover:bg-ryo-title"
                      key={item}
                    >
                      {item}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </Transition>
  );
};

export default PostCard;
