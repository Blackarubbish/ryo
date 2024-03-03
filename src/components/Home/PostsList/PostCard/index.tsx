import { Posts } from '@/types';
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
    <div
      onClick={toPost}
      className="cursor-pointer px-5  pt-3 opacity-75 hover:bg-slate-200"
    >
      <div className="flex border-b border-solid border-inherit pb-3 ">
        <div className="w-0 flex-auto">
          <div className="text-ryo-title mt-0.5">
            <a href="#" className="text-lg font-semibold">
              标题
            </a>
          </div>
          <div className="text-ryo-text m-2 truncate text-sm">
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
                    className="bg-ryo-bg-sub2 hover:bg-ryo-title ml-2 max-w-[80px] rounded-sm px-2 py-0.5 text-xs"
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
  );
};

export default PostCard;
