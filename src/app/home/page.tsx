import PostList from '@/components/Home/PostsList';
import RightSide from '@/components/Home/RightSize';
import { Posts } from '@/types';

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
    <main className="relative mt-6">
      <PostList posts={posts} />
      <RightSide />
    </main>
  );
};

export default Home;
