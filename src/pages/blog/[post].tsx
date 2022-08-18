import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { remark } from 'remark';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import html from 'remark-html';

import BlogPost from '@/components/blog/blogpost';
import { PostProps } from '@/components/blog/postsStruct';
import Layout from '@/components/layout/Layout';
import Loading from '@/components/util/Loading';

import { ISSERVER } from '@/constants/constants';

const processMarkdown = (content: string) => {
  return remark().use(html).use(remarkGfm).use(remarkBreaks).process(content);
};

export default function Post() {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const [postData, setPostData] = useState<PostProps>({
    articleUrl: '',
    id: '',
    title: '',
    author: '',
    timestamp: 0,
  });
  const getPostMetadata = (): string => {
    const { post } = router.query;
    if (!ISSERVER) {
      if (typeof post == 'string') {
        const data = window.localStorage.getItem(post);
        if (typeof data == 'string') {
          const dataObj = JSON.parse(data);
          setPostData(dataObj);
          return dataObj.articleUrl;
        }
      }
    }
    return '';
  };

  const getPost = (url: string) => {
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
    const postUrl = getPostMetadata();
    if (postUrl) getPost(postUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);
  return (
    <Layout>
      {!isLoading ? (
        <BlogPost
          title={postData.title}
          author={postData.title}
          content={content}
          date={new Date(postData.timestamp).toLocaleDateString('en-us')}
        />
      ) : (
        <Loading />
      )}
    </Layout>
  );
}
