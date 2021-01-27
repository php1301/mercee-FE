import 'rc-collapse/assets/index.css';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import 'assets/styles/scrollbar.css';
import 'assets/styles/rc-collapse.css';
import 'assets/styles/styles.css';
import { CartProvider } from 'contexts/cart/cart.provider';
import { DrawerProvider } from 'contexts/drawer/drawer.provider';
import { SearchProvider } from 'contexts/search/use-search';
import 'typeface-open-sans';
import Layout from 'containers/layout/layout';
// import { CategoryProvider } from 'contexts/category/use-category';

export default function CustomApp({ Component, pageProps }) {
  return (
    <SearchProvider>
      {/* <CategoryProvider> */}
      <DrawerProvider>
        <CartProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CartProvider>
      </DrawerProvider>
      {/* </CategoryProvider> */}
    </SearchProvider>
  );
}
