import * as React from 'react';
import { RiCopyleftLine } from 'react-icons/ri';

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
      <ul className='mt-3 flex flex-wrap items-center text-sm text-gray-500 dark:text-slate-200 sm:mt-0'>
        <li>
          <a href='#' className='mr-4 hover:underline md:mr-6 '>
            About
          </a>
        </li>
        <li>
          <a href='#' className='mr-4 hover:underline md:mr-6'>
            Privacy Policy
          </a>
        </li>
        <li>
          <a href='#' className='mr-4 hover:underline md:mr-6'>
            Licensing
          </a>
        </li>
        <li>
          <a href='#' className='hover:underline'>
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}
