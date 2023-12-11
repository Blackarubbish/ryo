import { useEffect, useRef, useState } from 'react';

import _ from 'lodash';
const useScrollY = () => {
  const [scrollY, setScrollY] = useState(0);
  const onScroll = useRef(
    _.throttle(() => {
      console.log(window.scrollY);
      setScrollY(
        window.scrollY ||
          window.pageYOffset ||
          document.documentElement.scrollTop
      );
    }, 200)
  );
  useEffect(() => {
    window.addEventListener('scroll', onScroll.current);
    return () =>
      window && window.removeEventListener('scroll', onScroll.current);
  }, [onScroll]);
  return scrollY;
};

export default useScrollY;
