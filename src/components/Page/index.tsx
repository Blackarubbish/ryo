import { Post } from '@/types';
import style from './index.module.scss';
import PostList from './postlist';
const getPosts = async (): Promise<Post[]> => {
  const posts: Post[] = [];
  for (let i = 0; i < 10; i++) {
    posts.push({
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nulla quibusdam animi, facilis tempora adipisci, molestias, omnis atque natus blanditiis voluptatum! Cupiditate iure nobis voluptatum, veniam sapiente quos? Ut, ea.',
      title: 't1',
      id: String(i),
      ctime: Date.now(),
      view: 100,
      like: 100,
      mtime: Date.now(),
      label: ['js', 'javscript', 'go'],
    });
  }
  return posts;
};
const PostPage = async ({
  params,
}: {
  params: {
    pageNum?: number;
  };
}) => {
  const posts = await getPosts();
  const current = params.pageNum || 1;
  return (
    <div className={style.home}>
      <PostList current={current} postList={posts} />
    </div>
  );
};

export default PostPage;
