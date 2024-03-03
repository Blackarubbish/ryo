// app/providers.tsx
'use client';

import { NextUIProvider } from '@nextui-org/react';
import { Dispatch, SetStateAction, createContext, useState } from 'react';

// 应用上下文
export const AppContext = createContext<{
  isShowMenu: boolean;
  setIsShowMenu: Dispatch<SetStateAction<boolean>>;
}>({
  isShowMenu: true,
  setIsShowMenu: () => {},
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [isShowMenu, setIsShowMenu] = useState(true);
  return (
    <NextUIProvider>
      <AppContext.Provider
        value={{
          isShowMenu,
          setIsShowMenu,
        }}
      >
        {children}
      </AppContext.Provider>
    </NextUIProvider>
  );
}
