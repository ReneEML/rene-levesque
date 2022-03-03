import * as React from 'react';

function Tag({ title }: { title: string }) {
  return (
    <div className='rounded-full bg-primary-900 py-1 px-2'>
      <p className='text-sm text-slate-200'>{title}</p>
    </div>
  );
}

export default function Tags({ tags }: { tags: string[] }) {
  return (
    <div className='justify-space-between flex flex-row space-x-2'>
      {tags.map((title, index) => (
        <Tag key={`tag_${index}`} title={title} />
      ))}
    </div>
  );
}
