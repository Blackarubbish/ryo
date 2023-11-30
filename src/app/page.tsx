import PostsContainer from '@/components/PostsContainer';
const Home = () => {
  return (
    <main className="relative mt-6">
      <PostsContainer />
      <div className="absolute right-0 top-0 h-80 w-[21.66rem] bg-slate-400"></div>
    </main>
  );
};

export default Home;
