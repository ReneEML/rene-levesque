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
  demoLink: string | undefined;
  description: string;
}) {
  return (
    <div className='flex flex-col rounded-lg bg-primary-100 drop-shadow-lg dark:bg-primary-900'>
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
      <div className='space-y-2 px-4 py-4'>
        <div className='text-left'>
          <h3 className='font-medium'>{title}</h3>
        </div>
        <div className='text-left'>{description}</div>
        <Tags tags={tags} />
        <div className='flex flex-row justify-start space-x-4'>
          <UnderlineLink href={codeLink}>Code</UnderlineLink>
          {demoLink ? (
            <UnderlineLink href={demoLink}>Demo</UnderlineLink>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
