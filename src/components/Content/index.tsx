import React from 'react';

export default function RyoContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mx-auto my-0 max-w-7xl">{children}</div>;
}
