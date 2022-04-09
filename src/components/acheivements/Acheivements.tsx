import * as React from 'react';

import { acheivements } from '@/constants/constants';

function Achievement({
  description,
  count,
  plus,
}: {
  description: string;
  count: number;
  plus: boolean;
}) {
  return (
    <div className='rounded-lg bg-primary-100 px-4 py-4 dark:bg-primary-900'>
      <h3>
        {count}
        {plus ? '+' : ''}
      </h3>
      <p>{description}</p>
    </div>
  );
}

export default function Achievemets() {
  return (
    <div className='grid grid-cols-1 gap-4 py-4 drop-shadow-md md:grid-cols-3 lg:grid-cols-5'>
      {acheivements.map((item, index) => (
        <Achievement
          key={`acheivement_${index}`}
          description={item.description}
          count={item.count}
          plus={item.plus}
        />
      ))}
    </div>
  );
}
