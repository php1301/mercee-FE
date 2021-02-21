import React from 'react';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import dynamic from 'next/dynamic';
import Logo from 'assets/icons/logo';
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
        <h2>Demo Dynamic Routing - Catch All Routes</h2>
        <h2>Redirected when access to /demo2</h2>
        <h2>Watch the redirected url when click the Logo</h2>
      </div>
      {/* Catch all routes */}
      <Link
        href={{
          pathname: `/demo2/${content}`,
          query: { slug: 'my-post', type: 'test' },
        }}
        // as={`/demo/${content}?slug=mypost`}
      >
        <a>
          <Logo width="100px" id="medsy-menu-logo" />
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
    paths: [
      // Nếu filename là catch all routes - [...type]
      { params: { type: ['grocery'] } },
      { params: { type: ['grocery', 'test'] } },
      { params: { type: ['makeup'] } },
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

    // note - fallback true ở page 404 sẽ cho ra 1 page dynamic content khác
    // Chứ không redirect qua 404 - nhớ check null
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
