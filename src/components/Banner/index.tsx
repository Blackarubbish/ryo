import h from '@/assets/homework.svg';
import Image from 'next/image';
export default function RoyBanner() {
  return (
    <div className="relative flex h-72 items-center justify-center border-b border-solid border-slate-200 xl:h-80 2xl:h-96">
      <div className="text-4xl font-extrabold text-slate-800">标题</div>
      <Image
        className="absolute bottom-0 right-0 h-72 w-72"
        src={h}
        sizes="200px"
        alt="插画"
      />
    </div>
  );
}
