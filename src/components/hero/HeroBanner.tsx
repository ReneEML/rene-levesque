import { scrollToId } from '@/lib/helper';

import HeroAnimation from './HeroAnimation';
import {
  DownArrowButton,
  HeroButtons,
  HeroContent,
  HeroLinks,
  HeroText,
  HeroTitle,
} from './HeroComponents';
import Container from '../util/Container';

export default function HeroBanner() {
  return (
    <Container>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='order-last flex flex-col items-center justify-center md:order-first'>
          <HeroContent>
            <HeroTitle />
            <HeroText />
            <HeroButtons />
            <HeroLinks />
          </HeroContent>
        </div>
        <div className='flex h-full w-full items-center justify-center '>
          <HeroAnimation />
        </div>
      </div>
      <div className='flex justify-center pt-20 lg:pt-0'>
        <DownArrowButton onClick={() => scrollToId('projects')} />
      </div>
    </Container>
  );
}
