export function debounce(
  func: (...args: any[]) => unknown,
  delay = 500,
  immediate = false
) {
  let timer: number | null = -1;
  return function (this: any, ...args: any[]) {
    const context = this;
    // 防抖函数的关键，在timer还存在时如果触发了事件，则清空定时器，重新计时
    if (timer) clearTimeout(timer);
    // 判断是否需要立即执行
    if (immediate) {
      if (!timer) {
        args.length ? func.apply(context, args) : func.apply(context);
      }
      timer = window.setTimeout(() => {
        timer = null;
      }, delay);
    } else {
      timer = window.setTimeout(() => {
        args.length ? func.apply(context, args) : func.apply(context);
      }, delay);
    }
  };
}
