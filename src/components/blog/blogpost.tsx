// import remarkGfm from 'remark-gfm';
import Container from '../util/Container';

export default function BlogPost({ title, author, date, content }: any) {
  return (
    <Container>
      <div className='flex h-full min-h-screen justify-center py-8'>
        <div className='w-3/5'>
          <div className='py-2'>
            <h1 className='font-medium'>{title}</h1>
            <h4 className='font-medium text-slate-500'>
              {author} - {date}
            </h4>
          </div>
          <div
            className='space-y-4'
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </Container>
  );
}
