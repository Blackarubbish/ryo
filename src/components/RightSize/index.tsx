'use client';
import { Transition } from '@headlessui/react';
import { useState } from 'react';
const RightSide = () => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <div className="absolute right-0 top-0 w-[21.66rem]">
      <Transition
        appear={true}
        show={true}
        enter="transform duration-200 transition ease-in-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 rotate-0 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="opacity-100 rotate-0 scale-100 "
        leaveTo="opacity-0 scale-95 "
      >
        <div className="h-40 rounded bg-white shadow-lg dark:bg-slate-900">
          21312312
        </div>
      </Transition>
    </div>
  );
};

export default RightSide;
