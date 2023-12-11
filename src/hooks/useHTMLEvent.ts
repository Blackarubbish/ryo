import { useEffect } from 'react';

const useHtmlEvent = (
  dom: HTMLElement | Window | null,
  event: string,
  callback: () => void
) => {
  useEffect(() => {
    const target = dom ? dom : window;
    target.addEventListener(event, callback);

    return () => {
      target.removeEventListener(event, callback);
    };
  });
};

export default useHtmlEvent;
