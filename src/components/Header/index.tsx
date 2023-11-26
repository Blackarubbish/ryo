import style from './index.module.scss';

export default function RoyHeader() {
  return (
    <header className="h-16">
      <div className={`${style.header} fixed inset-x-0 top-0 h-16 max-w-8xl`}>
        Header
      </div>
    </header>
  );
}
