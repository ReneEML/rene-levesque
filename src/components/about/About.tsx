import Image from 'next/image';
import * as React from 'react';

import Achievemets from '../acheivements/Acheivements';
import Container from '../util/Container';
import Hr from '../util/Hr';

function AboutContent() {
  return (
    <div className='flex flex-row items-center justify-center'>
      <div className='grid w-full grid-cols-1 items-center rounded-xl bg-primary-100 md:w-4/5 md:grid-cols-2'>
        <div className='order-last px-6 py-4 md:order-first'>
          <h3>Bio</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <Image
            className='rounded-t-xl md:rounded-none md:rounded-r-xl'
            src='https://image.shutterstock.com/image-photo/check-this-out-cheerful-excited-600w-754741714.jpg'
            alt='Photo of Rene Levesque'
            layout='responsive'
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <Container>
      <div className='pb-8' id='about'>
        <Hr />
        <h1 className='font-medium'>About</h1>
        <Achievemets />
        <AboutContent />
      </div>
    </Container>
  );
}
