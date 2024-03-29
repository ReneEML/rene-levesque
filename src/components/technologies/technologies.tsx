import * as React from 'react';
import { FaCloud, FaDatabase, FaReact } from 'react-icons/fa';

import { technologies } from '@/constants/constants';

import Container from '../util/Container';
import Hr from '../util/Hr';

interface TechnologyCardProps {
  item: {
    icon: string;
    content: string;
    name: string;
  };
}

function TechnologyIcon({ icon }: { icon: string }) {
  switch (icon) {
    case 'react':
      return <FaReact size='2rem' />;
    case 'database':
      return <FaDatabase size='2rem' />;
    case 'cloud':
      return <FaCloud size='2rem' />;
    default:
      break;
  }
  return <></>;
}

function TechnologyCard({ item }: TechnologyCardProps) {
  return (
    <div className='mx-auto flex w-full flex-col rounded-lg bg-primary-100 px-4 py-4 drop-shadow-md dark:bg-primary-900'>
      <TechnologyIcon icon={item.icon} />
      <h4>{item.name}</h4>
      <p>
        Experience With: <br />
        {item.content}
      </p>
    </div>
  );
}

export default function Technologies() {
  return (
    <Container>
      <div className='pb-8'>
        <Hr />
        <h1 className='font-medium'>Technologies</h1>
        <p>
          I&#39;ve worked with a range of tech through my studies, interships
          and building personal projects
        </p>
      </div>
      <div className='flex justify-center'>
        <div className='grid w-3/4 grid-cols-1 justify-center gap-4 md:grid-cols-3'>
          {technologies.map((item, index) => (
            <TechnologyCard key={`technology_card_${index}`} item={item} />
          ))}
        </div>
      </div>
    </Container>
  );
}
