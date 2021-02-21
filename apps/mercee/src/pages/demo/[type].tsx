import React from 'react';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import dynamic from 'next/dynamic';
import SEO from 'components/seo';
import { sitePages } from 'settings/site-pages';

const DemoPage: NextPage<Record<string, unknown>> = ({ content }) => {
  console.log(content);
  const { query } = useRouter();
  const PAGE_TYPE: any = query.type;
  const page = sitePages[PAGE_TYPE];
  return (
    <>
      <SEO title={page?.page_title} description={page?.page_description} />
      <div style={{ marginTop: '50px' }}>
        <h2>{content}</h2>
      </div>
      {/* Catch all routes */}
      {/* <Link
        href={{
          pathname: `/demo/${content}`,
          query: { slug: 'my-post', type: 'test' },
        }}
        // as={`/demo/${content}?slug=mypost`}
      > */}

      {/* Nếu không phải catch all routes - có thể test bằng cách đổi tên file
       cùng tên [type] sẽ bị merge vô
         /demo/my-post?slug=another */}
      <Link
        href={{
          pathname: '/demo/[type]',
          query: { type: 'my-post', slug: 'another' },
        }}
      >
        <a>
          <h2 className="sr-only">Demo Dynamic Routing</h2>
        </a>
      </Link>
    </>
  );
};

// Because getStaticProps runs at build time,
// it does not receive data that’s only available during request time,
// such as query parameters or HTTP headers as it generates static HTML.

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(params); // params từ getStaticPath
  return {
    props: {
      content: params.type,
    },
    //  Incremental Static Regeneration
    revalidate: 1, // requery lại mỗi 1s
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('demo');
  return {
    //   lúc này sẽ có demo/[type]/grocery
    paths: [
      // Nếu filename là catch all routes - [...type]
      // { params: { type: ['grocery'] } },
      // { params: { type: ['grocery', 'test'] } },
      // { params: { type: ['makeup'] } },

      { params: { type: 'grocery' } },
      { params: { type: 'makeup' } },
      { params: { type: 'bags' } },
      { params: { type: 'book' } },
      { params: { type: 'medicine' } },
      { params: { type: 'furniture' } },
      { params: { type: 'clothing' } },
    ],
    fallback: false, //  // { fallback: false } means other routes should 404.
    // fallback true - sẽ provide 1 page fallback
    // Page fallback để làm page dự phòng
    // Khi page chưa generate
    // Khi ta cần fetch data ở SSG - fetch data cực nhanh
    // Page fallback có gì?
    // empty props
    // router sẽ có access router.isFallback
    // router.isFallback có thể sử dụng để check có đang load data
    // https://nextjs.org/docs/basic-features/data-fetching#when-is-fallback-true-useful
  };
};
// Easy serverless - JAM stack
// Note that getStaticProps runs only on the server-side.
// It will never be run on the client-side.
// It won’t even be included in the JS bundle for the browser.
// That means you can write code such as direct database queries
// without them being sent to browsers.
// You should not fetch an API route from getStaticProps —
// Instead, you can write the server-side code directly in getStaticProps.

export default DemoPage;
