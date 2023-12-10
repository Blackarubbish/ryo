import '@/assets/style/md-dark.css';
import '@/assets/style/md-light.scss';
import Markdown from '@/components/Markdown';
import PostRightSize from '@/components/Posts/RightSide';
interface Props {
  params: {
    id: string;
  };
}
const PostPage = ({ params }: Props) => {
  const data = `
  ~~~js
console.log('It works!')
~~~
  # Hi, *Pluto*!
  # asjdjasdh
  ## askjdh
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  - 1
  1
  1
  1
  ### alsdjkasld
  ### asldjaslkdj
  使\`npx create-next-app@latest\`初始化项目时会有添加eslint的选项，一般都会选择启用，因此不用自己配置eslint。下面介绍如何在此基础上添加prettier和husky
  `;

  return (
    <div className="relative mt-6 ">
      <div className="mr-[23.33rem] w-[900px] overflow-hidden rounded bg-white shadow-lg">
        <Markdown content={data} />
      </div>
      <PostRightSize />
    </div>
  );
};

export default PostPage;
