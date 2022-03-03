import * as React from 'react';

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className='container flex flex-col px-8'>{children}</div>;
}
