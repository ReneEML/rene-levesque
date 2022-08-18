import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';

import animationJson from '../../../public/images/hero-animation.json';

export default function HeroAnimation() {
  const [animationPosition, setAnimationPosition] = useState(0);
  const handleScroll = () => {
    const newPosition = Math.round((Math.max(0, window.scrollY) + 100) * 0.3);
    setAnimationPosition(newPosition);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className='flex w-full justify-center'>
      <Lottie
        className='w-3/4'
        animationData={animationJson}
        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        goTo={animationPosition}
      />
    </div>
  );
}
