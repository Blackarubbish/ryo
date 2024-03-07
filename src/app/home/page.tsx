import PostCard from '@/components/PostCard';
import { Posts } from '@/types';
import style from './index.module.scss';
const getPosts = async (): Promise<Posts[]> => {
  const posts: Posts[] = [];
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
const Home = async () => {
  const posts = await getPosts();
  return (
    <div className={style.home}>
      <PostCard />
    </div>
  );
};

export default Home;
