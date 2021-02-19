/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import SEO from 'components/seo';
import Highlight from 'containers/highlight';
import HowItWorks from 'containers/how-it-works';
// import Categories from 'containers/categories';
// import Products from 'containers/products';
import CallToAction from 'containers/call-to-action';
import { useRefScroll } from 'hooks/use-ref-scroll';
import { useSearch } from 'contexts/search/use-search';
import { useCategory } from 'contexts/category/category.provider';
// import { getProducts } from 'helpers/get-products';
// import { getCategories } from 'helpers/get-categories';

const Index: NextPage = () => {
  // Scroll Observer
  const { elRef, scroll } = useRefScroll({
    percentOfElement: 0,
    percentOfContainer: 0,
    offsetPX: -100,
  });
  const { searchTerm } = useSearch();
  const { category } = useCategory();
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (searchTerm || category) return scroll();
  }, [searchTerm, category]);

  return (
    <>
      <SEO
        title="Medsy"
        description="Checkout Details"
      />
      <Highlight />
      <HowItWorks />
      <CallToAction />
    </>
  );
};

export default Index;

// export const getServerSideProps: GetServerSideProps = async ({params}) => {
//   const products = await getProducts();
//   const categories = await getCategories();
//   return {
//     props: {
//       products,
//       categories,
//     },
//   };
// };
