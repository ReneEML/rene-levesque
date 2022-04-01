import Image from 'next/image';
import * as React from 'react';

import { customLoader } from '@/lib/helper';

import Tags from './Tags';
import UnderlineLink from '../links/UnderlineLink';

export default function ProjectCard({
  image,
  title,
  tags,
  codeLink,
  demoLink,
  description,
}: {
  image: string;
  title: string;
  tags: string[];
  codeLink: string;
  demoLink: string;
  description: string;
}) {
  return (
    <div className='flex h-full w-full flex-col rounded-lg bg-primary-100 drop-shadow-lg'>
      <Image
        unoptimized
        className='rounded-t-lg'
        src={image}
        layout='intrinsic'
        height={200}
        width={200}
        alt='source'
        loader={customLoader}
      />
      <div className='space-y-2 px-4 pt-4 pb-6'>
        <div className='text-left'>
          <h3 className='font-medium'>{title}</h3>
        </div>
        <div className='text-left'>{description}</div>
        <Tags tags={tags} />
        <div className='flex flex-row justify-start space-x-4'>
          <UnderlineLink href={codeLink}>Code</UnderlineLink>
          <UnderlineLink href={demoLink}>Demo</UnderlineLink>
        </div>
      </div>
    </div>
  );
}
