import * as React from 'react';
import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { RiCopyleftLine } from 'react-icons/ri';

import UnstyledLink from '../links/UnstyledLink';

export default function Footer() {
  const getYear = () => new Date().getFullYear();
  return (
    <footer className='rounded-t-lg bg-white p-4 shadow dark:bg-primary-900 md:flex md:items-center md:justify-between md:p-6'>
      <span className='flex flex-row items-center space-x-2 text-sm text-gray-500 dark:text-slate-200 sm:text-center'>
        <RiCopyleftLine /> {getYear()}{' '}
        <a href='' className='hover:underline'>
          Rene Levesque
        </a>
      </span>
      <ul className='mt-3 flex flex-wrap items-center space-x-2 text-sm text-gray-500 dark:text-slate-200 sm:mt-0'>
        <li>
          <a
            href='mailto:rene.m.levesque@gmail.com'
            className='hover:underline'
          >
            rene.m.levesque@gmail.com
          </a>
        </li>
        <li>
          <UnstyledLink href='https://www.linkedin.com/in/reneml/'>
            <AiOutlineLinkedin size='1.5rem' className='cursor-pointer' />
          </UnstyledLink>
        </li>
        <li>
          <UnstyledLink href='https://github.com/ReneEML'>
            <AiFillGithub size='1.5rem' className='cursor-pointer' />
          </UnstyledLink>
        </li>
      </ul>
    </footer>
  );
}
