import * as React from 'react';
import { useEffect } from 'react';

import { ISSERVER, KEYS } from '@/constants/constants';

import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!ISSERVER) {
      const storedTheme = window.localStorage.getItem(KEYS.COLOR);
      if (storedTheme) {
        const root = window.document.documentElement;
        const colorTheme = storedTheme === 'light' ? 'dark' : 'light';
        root.classList.remove(colorTheme);
        root.classList.add(storedTheme);
      }
    }
  }, []);
  return (
    <div className='dark:bg-dark'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
