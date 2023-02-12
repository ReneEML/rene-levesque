import Link from 'next/link';
import * as React from 'react';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineCoffee, AiOutlineMenu } from 'react-icons/ai';
import { BsMoonStars, BsSun } from 'react-icons/bs';

import UnstyledLink from '@/components/links/UnstyledLink';

import { ISSERVER, KEYS } from '@/constants/constants';

import Button from '../buttons/Button';

const links = [
  { href: '/#projects', label: 'Projects' },
  { href: '/#about', label: 'About' },
  { href: '/blog', label: 'Blog' },
];

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [colorMode, setColorMode] = useState('light');
  const openMobileNav = () => {
    setMobileNavOpen(true);
  };
  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };
  const toggleDarkMode = () => {
    if (!ISSERVER) {
      const root = window.document.documentElement;
      const newMode = colorMode === 'light' ? 'dark' : 'light';
      root.classList.remove(colorMode);
      root.classList.add(newMode);
      setColorMode(newMode);
      window.localStorage.setItem(KEYS.COLOR, newMode);
    }
  };

  React.useEffect(() => {
    if (!ISSERVER) {
      const theme = window.localStorage.getItem(KEYS.COLOR);
      if (theme) {
        setColorMode(theme);
      }
    }
  }, []);
  const ToggleDarkModeButton = () => (
    <Button
      onClick={() => {
        toggleDarkMode();
      }}
    >
      <BsSun className='hidden dark:flex' />
      <BsMoonStars className='flex dark:hidden' />
    </Button>
  );

  const toggleDarkModeAndCloseNav = () => {
    toggleDarkMode();
    closeMobileNav();
  };
  const MobileDropdown = () => {
    return (
      <div className='flex h-screen w-screen flex-col py-8 dark:bg-dark dark:text-slate-300 md:hidden'>
        <div className='flex flex-row justify-end py-8'>
          <button
            className='px-12 hover:text-purple-700'
            onClick={() => closeMobileNav()}
          >
            <AiOutlineClose size='2rem' />
          </button>
        </div>
        <ul className='mx-auto flex flex-col items-center space-y-16 py-16'>
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <Link href={href}>
                <a onClick={() => closeMobileNav()} className='text-2xl'>
                  {label}
                </a>
              </Link>
            </li>
          ))}
          <li>
            <button onClick={() => toggleDarkModeAndCloseNav()}>
              <BsSun size='2rem' className='hidden dark:flex' />
              <BsMoonStars size='2rem' className='flex dark:hidden' />
            </button>
          </li>
        </ul>
      </div>
    );
  };

  const ResponsiveHeader = () => {
    return (
      <div className='flex flex-col dark:bg-dark dark:text-slate-300'>
        <div className='layout mt-2 flex h-14 items-center justify-between'>
          <div className='md:flex'>
            <div className='mr-1 flex cursor-pointer items-center text-2xl font-bold'>
              <UnstyledLink href='/' className='flex flex-row font-medium '>
                <span className='mr-1 text-3xl text-purple-700 '>
                  <AiOutlineCoffee />
                </span>
                RL
              </UnstyledLink>
            </div>
          </div>
          <nav className='flex items-center'>
            <button className='px-6' onClick={() => openMobileNav()}>
              <AiOutlineMenu
                className='text-purple-700  md:hidden'
                size='2rem'
              />
            </button>
            <ul className='hidden justify-between space-x-4 dark:text-slate-300 md:flex'>
              {links.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <UnstyledLink href={href} className='hover:text-purple-700'>
                    {label}
                  </UnstyledLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className='hidden md:flex'>
            <ToggleDarkModeButton />
          </div>
        </div>
      </div>
    );
  };
  return (
    <header className='sticky top-0 z-50 bg-white'>
      {mobileNavOpen ? <MobileDropdown /> : <ResponsiveHeader />}
    </header>
  );
}
