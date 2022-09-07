import { useEffect, useState } from 'react';

import { blog_api_url, ISSERVER } from '@/constants/constants';

import { PostProps } from './postsStruct';
import UnstyledLink from '../links/UnstyledLink';
import Container from '../util/Container';
import Loading from '../util/Loading';

function BlogCard({ title, author, date, url }: any) {
  return (
    <UnstyledLink href={url}>
      <div className='cursor-pointer space-y-3 rounded-lg bg-primary-100 px-4 py-4 drop-shadow-lg hover:bg-primary-50 dark:bg-primary-900 hover:dark:bg-primary-800'>
        <div>
          <h1 className='font-medium'>{title}</h1>
          <h4 className='font-medium'>{author}</h4>
          <h4 className='font-medium text-slate-500 dark:text-slate-400'>
            {date}
          </h4>
        </div>
      </div>
    </UnstyledLink>
  );
}

export default function BlogHome() {
  const [pages, setPages] = useState<Array<PostProps>>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(blog_api_url, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPages(
          data['body'].sort((a: PostProps, b: PostProps) =>
            a.timestamp < b.timestamp ? 1 : -1
          )
        );
        setLoading(false);
        if (!ISSERVER) {
          for (const x of data['body']) {
            if (!window.localStorage.getItem(x.id))
              window.localStorage.setItem(x.id, JSON.stringify(x));
          }
        }
      })
      .catch((err) => err);
  }, []);
  return (
    <>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <div className='h-full'>
          <Container>
            <div className='flex justify-center py-8'>
              <div className='grid w-3/5 grid-cols-1 space-y-4'>
                <h1 className='font-medium'>Articles</h1>
                {pages.map((item, index) => (
                  <BlogCard
                    key={`blog_card_${index}`}
                    title={item.title}
                    date={new Date(item.timestamp).toLocaleDateString('en-US')}
                    author={item.author}
                    url={`/blog/${item.id}`}
                  />
                ))}
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}
