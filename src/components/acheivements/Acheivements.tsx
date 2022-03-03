import * as React from 'react';

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
    <div className='rounded-lg bg-primary-100 px-4 py-4'>
      <h3>
        {count}
        {plus ? '+' : ''}
      </h3>
      <p>{description}</p>
    </div>
  );
}

export default function Achievemets() {
  const acheivements = [
    {
      description: 'Hackathons Won',
      count: 1,
      plus: false,
    },
    {
      description: 'Magic The Gathering Draft win rate (%)',
      count: 65,
      plus: true,
    },
    {
      description: 'University Average (%)',
      count: 89,
      plus: true,
    },
    {
      description: 'Powerlifting Total (lbs)',
      count: 1000,
      plus: true,
    },
    {
      description: 'Hours debugging',
      count: 999,
      plus: true,
    },
  ];
  return (
    <div className='grid grid-cols-1 gap-4 py-4 md:grid-cols-3 lg:grid-cols-5'>
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
