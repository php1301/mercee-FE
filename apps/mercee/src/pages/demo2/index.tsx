import { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';

// the redirect will only happen on the client-side. This is by design,
//  `{}` actually means "any non-nullish value".
// const IndexPage: React.FC<{}> = () => {
// instead
const IndexPage: React.FC<Record<string, unknown>> = () => {
  // or const IndexPage: React.FC<unknown> = () => {
  useEffect(() => {
    Router.replace('/demo2/[...type]', '/demo2/grocery');
  });
  // /page/[page-id].js will match with routes like /page/1 or /page/2, but not /page/1/2
  // /page/[...slug].js will match with routes like /page/1/2, but not /page/
  // /page/[[...slug]].js will match with routes like /page/1/2 and /page/
  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>

  );
};

export default IndexPage;
