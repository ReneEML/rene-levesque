import Image from 'next/image';
import * as React from 'react';

import { customLoader } from '@/lib/helper';

import { bioParagraphs } from '@/constants/constants';

import Achievemets from '../acheivements/Acheivements';
import Container from '../util/Container';
import Hr from '../util/Hr';

function AboutContent() {
  return (
    <div className='flex flex-row items-center justify-center py-6 drop-shadow-md'>
      <div className='grid w-full grid-cols-1 items-center rounded-xl bg-primary-100 md:w-5/6 md:grid-cols-2'>
        <div className='order-last px-6 py-4 md:order-first'>
          <h3>Bio</h3>
          {bioParagraphs.map((item, index) => (
            <p className='pt-2' key={`bio_paragraph_${index}`}>
              {item}
            </p>
          ))}
        </div>
        <div>
          <Image
            className='rounded-t-xl md:rounded-none md:rounded-r-xl'
            src='/images/rene.jpg'
            alt='Photo of Rene Levesque'
            layout='responsive'
            unoptimized
            loader={customLoader}
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
