import UnstyledLink from '../links/UnstyledLink';
import Container from '../util/Container';

const pages = [
  {
    title: 'test1',
    description: 'test description',
    date: new Date().toDateString(),
    link: 'first-post',
  },
  {
    title: 'test1',
    description: 'test description',
    date: new Date().toDateString(),
    link: 'first-post',
  },
  {
    title: 'test1',
    description: 'test description',
    date: new Date().toDateString(),
    link: 'first-post',
  },
];

function BlogCard({ title, description, date, url }: any) {
  return (
    <UnstyledLink href={url}>
      <div className='cursor-pointer space-y-3 rounded-lg bg-primary-100 px-4 py-4 drop-shadow-lg hover:bg-primary-50 dark:bg-primary-900 hover:dark:bg-primary-800'>
        <div>
          <h1 className='font-medium'>{title}</h1>
          <h4 className='font-medium'>{description}</h4>
          <h4 className='font-medium text-slate-500 dark:text-slate-400'>
            {date}
          </h4>
        </div>
      </div>
    </UnstyledLink>
  );
}

export default function BlogHome() {
  return (
    <div className='h-screen'>
      <Container>
        <div className='flex justify-center py-8'>
          <div className='grid w-3/5 grid-cols-1 space-y-4'>
            <h1 className='font-medium'>Articles</h1>
            {pages.map((item, index) => (
              <BlogCard
                key={`blog_card_${index}`}
                title={item.title}
                date={item.date}
                description={item.description}
                url={`/blog/${item.link}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
