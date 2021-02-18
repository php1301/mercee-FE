import { useEffect } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import SEO from 'components/seo';
import Highlight from 'containers/highlight';
import Banner from 'containers/banner/banner';
// import Products from 'containers/products';
// import CallToAction from 'containers/call-to-action';
// import HowItWorks from 'containers/how-it-works';
// import { useRefScroll } from 'helpers/use-ref-scroll';
import { useSearch } from 'contexts/search/use-search';
// import { getProducts } from 'helpers/get-products';
// import { getCategories } from 'helpers/get-categories';
// import Categories from 'containers/categories';
// import { useCategory } from 'contexts/category/use-category';
import styles from './index.module.css';

const Index: NextPage = () => {
  const { searchTerm } = useSearch();
  // const { category } = useCategory();
  return (
    <>
      <SEO
        title="Medsy"
        description="Checkout Details"
      />
      <Highlight />
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
