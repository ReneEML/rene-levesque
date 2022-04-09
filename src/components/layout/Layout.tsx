import * as React from 'react';

import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='dark:bg-dark'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
