import * as React from 'react';

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className='container mx-auto flex flex-col px-8 dark:bg-dark dark:text-slate-300'>
      {children}
    </div>
  );
}
