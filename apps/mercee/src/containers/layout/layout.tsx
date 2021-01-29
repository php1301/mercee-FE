import Header from './header';
import Footer from './footer';
// import { Drawer, CartDrawer } from 'containers/drawer/drawer.provider';

const Layout = (props) => {
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
      {/* <Drawer /> */}
      <Header />
      <div className="flex flex-col w-full flex-grow h-full">
        <div className="pt-90px flex-auto pb-50px md:px-35px">
          {children}
        </div>
        <Footer />
      </div>
      {/* <CartDrawer /> */}
    </main>
  );
};

export default Layout;
