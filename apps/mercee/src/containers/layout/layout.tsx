import Header from './header';
// import Footer from './footer';
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
      {/* <div className="flex flex-col w-full h-full flex-grow">
      <div className="pt-90px px-3 pb-50px flex-auto md:px-35px">
        {children}
      </div>
      <Footer />
    </div>
    <CartDrawer /> */}
    </main>
  );
};

export default Layout;
