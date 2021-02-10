import { Drawer, CartDrawer } from 'containers/drawer/drawer';
import Header from './header';
import Footer from './footer';

type LayoutProps = {
  style: any;
};
const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = (props) => {
  const { style, children } = props;
  return (
    <main
      className="relative min-h-screen flex-grow "
      style={{
        minHeight: '-webkit-fill-available',
        WebkitOverflowScrolling: 'touch',
        ...style,
      }}
    >
      <Drawer />
      <Header />
      <div className="flex flex-col w-full flex-grow h-full">
        <div className="pt-90px flex-auto pb-50px md:px-35px">
          {children}
        </div>
        <Footer />
      </div>
      <CartDrawer />
    </main>
  );
};

export default Layout;
