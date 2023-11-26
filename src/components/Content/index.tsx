'use client';
import React from 'react';

export default function RyoContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const toggleMode = () => {
    const mode = document.body.getAttribute('data-mode');
    if (mode === 'dark') {
      document.body.setAttribute('data-mode', 'light');
    } else {
      document.body.setAttribute('data-mode', 'dark');
    }
  };
  return (
    <div className="mx-auto my-0 max-w-7xl">
      {children}
      <button onClick={toggleMode}>切换模式</button>
    </div>
  );
}
