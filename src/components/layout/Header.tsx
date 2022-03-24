import Link from 'next/link';
import * as React from 'react';
import { AiOutlineClose, AiOutlineCoffee, AiOutlineMenu } from 'react-icons/ai';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
];

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  const openMobileNav = () => {
    setMobileNavOpen(true);
  };
  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  const MobileDropdown = () => {
    return (
      <div className='flex h-screen w-screen flex-col py-8 md:hidden'>
        <div className='flex flex-row justify-end py-8'>
          <button
            className='px-12 hover:text-purple-700'
            onClick={() => closeMobileNav()}
          >
            <AiOutlineClose size='2rem' />
          </button>
        </div>
        <ul className='mx-auto flex flex-col items-start space-y-16 py-16'>
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <Link href={href}>
                <a onClick={() => closeMobileNav()} className='text-2xl'>
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const ResponsiveHeader = () => {
    return (
      <div className='flex flex-col'>
        <div className='layout mt-2 flex h-14 items-center justify-between'>
          <div className='bg-white md:flex'>
            <div className='mr-1 flex cursor-pointer items-center text-2xl font-bold'>
              <UnstyledLink href='/' className='flex flex-row font-medium'>
                <span className='mr-1 text-3xl text-purple-700'>
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
            <ul className='hidden justify-between space-x-4 md:flex'>
              {links.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <UnstyledLink href={href} className='hover:text-purple-700'>
                    {label}
                  </UnstyledLink>
                </li>
              ))}
            </ul>
          </nav>
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
