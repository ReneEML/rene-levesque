import * as React from 'react';
import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { BsNewspaper } from 'react-icons/bs';
import { FiArrowDown } from 'react-icons/fi';

import Button from '../buttons/Button';
import UnderlineLink from '../links/UnderlineLink';
import { scrollToId } from '../../lib/helper';

export function HeroTitle() {
  return (
    <div>
      <h1 className='font-medium'>
        Hey :) <br />
        My name is René Levesque
      </h1>
    </div>
  );
}

export function HeroText() {
  return (
    <div>
      <p>
        I&#39;m currently studying Computer Engineering at uWaterloo.
        <br />I like to lift weights, write code and play board games
      </p>
    </div>
  );
}

export function HeroContent({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col justify-center space-y-4'>{children}</div>
  );
}

export function HeroButtons() {
  return (
    <div className='flex flex-col justify-center space-x-2 md:flex-row md:justify-start'>
      <div className='mt-4 flex w-full justify-center md:mt-0 md:w-auto'>
        <Button
          className='w-full py-3 text-center md:py-2'
          onClick={() => scrollToId('about')}
        >
          More about me
        </Button>
      </div>
    </div>
  );
}

export function HeroLinks() {
  return (
    <div className='flex flex-row justify-start space-x-4'>
      <UnderlineLink href='/static/rene_levesque_resume.pdf'>
        <BsNewspaper />
        &#160;Resume
      </UnderlineLink>
      <UnderlineLink href='https://github.com/ReneEML'>
        <AiFillGithub />
        &#160;Github
      </UnderlineLink>
      <UnderlineLink href='https://www.linkedin.com/in/reneml/'>
        <AiOutlineLinkedin />
        &#160;LinkedIn
      </UnderlineLink>
    </div>
  );
}

export function DownArrowButton({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  large?: boolean;
}) {
  return (
    <button onClick={onClick}>
      <FiArrowDown
        size='3rem'
        className='cursor-pointer duration-300 hover:text-purple-700 motion-safe:animate-bounce'
      />
    </button>
  );
}
