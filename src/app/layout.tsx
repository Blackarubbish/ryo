import '@/assets/style/reset.css';
import RoyFooter from '@/components/layout/Footer';
import RoyHeader from '@/components/layout/Header';
import RyoMenu from '@/components/ui/side_menu';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import './index.scss';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body data-mode="light" className="font-ryo">
        <Providers>
          <RyoMenu />
          <main
            id="ryo-main"
            className="class-test peer min-h-full overflow-auto pl-[240px] transition-all duration-400 ease-in-out"
          >
            <RoyHeader />
            <div className="mx-auto my-0 w-[960px] px-0 pb-[40px] pt-[30px]">
              {children}
            </div>
            <RoyFooter />
          </main>
        </Providers>
      </body>
    </html>
  );
}
