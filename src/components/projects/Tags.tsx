import * as React from 'react';

function Tag({ title }: { title: string }) {
  return (
    <div className='mt-1 flex-auto rounded-full bg-primary-900 py-1 px-2'>
      <p className='text-center text-xs text-slate-200 md:text-sm'>{title}</p>
    </div>
  );
}

export default function Tags({ tags }: { tags: string[] }) {
  return (
    <div className='justify-space-between flex w-full flex-row flex-wrap space-x-1'>
      {tags.map((title, index) => (
        <Tag key={`tag_${index}`} title={title} />
      ))}
    </div>
  );
}
