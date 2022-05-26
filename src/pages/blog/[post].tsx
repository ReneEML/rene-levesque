import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { remark } from 'remark';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import html from 'remark-html';

import BlogPost from '@/components/blog/blogpost';
import Layout from '@/components/layout/Layout';
import Loading from '@/components/util/Loading';

const processMarkdown = (content: string) => {
  return remark().use(html).use(remarkGfm).use(remarkBreaks).process(content);
};

export default function Post() {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const getPost = () => {
    const { post } = router.query;
    const url = `https://rl-blog-post-files.s3.amazonaws.com/first-post.MD`;
    fetch(url)
      .then((result) => {
        if (result.status !== 200) throw new Error('Failed to find post');
        return result.text();
      })
      .then((result) => processMarkdown(result))
      .then((result) => result.toString())
      .then((result) => {
        setContent(result);
        setIsLoading(false);
      })
      .catch(() => window.location.href);
  };

  useEffect(() => {
    if (!router.isReady) return;
    setIsLoading(true);
    getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);
  return (
    <Layout>
      {!isLoading ? (
        <BlogPost
          title='My first Article'
          author='Rene Levesque'
          content={content}
          date={new Date().toLocaleDateString('en-us')}
        />
      ) : (
        <Loading />
      )}
    </Layout>
  );
}
