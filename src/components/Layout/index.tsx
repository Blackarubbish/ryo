import RyoContent from './Content';
import RoyHeader from '../Header';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div id="roy" className="min-h-screen bg-light dark:bg-black dark:bg-none">
      <RoyHeader />
      <RyoContent>{children}</RyoContent>
    </div>
  );
};

export default Layout;
