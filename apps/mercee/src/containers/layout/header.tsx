import { useContext } from 'react';
import Link from 'next/link';
import PhoneIcon from 'assets/icons/phone';
import CartIcon from 'assets/icons/cart-icon';
import Logo from 'assets/icons/logo';
import Search from 'components/search';
import { DrawerContext } from 'contexts/drawer/drawer.provider';
import { useCart } from 'contexts/cart/cart.provider';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const { dispatch } = useContext(DrawerContext);
  const { itemsCount } = useCart();

  const showMenu = () => {
    dispatch({
      type: 'OPEN_MENU',
      payload: {
        menu: true,
      },
    });
  };

  const showCart = () => {
    dispatch({
      type: 'SLIDE_CART',
      payload: {
        open: true,
      },
    });
    dispatch({
      type: 'TOGGLE_CART_VIEW',
      payload: {
        showCart: true,
      },
    });
  };

  const isHome = router.pathname === '/';

  return (
    <header className="flex items-center shadow-mobile text-gray-700 body-font fixed bg-white w-full h-90px z-20 lg:shadow-header pr-20px md:pr-30px lg:pr-40px">
      <button
        aria-label="Menu"
        className="menuBtn flex flex-col items-center justify-center w-50px flex-shrink-0 h-full outline-none focus:outline-none lg:w-90px"
        onClick={showMenu}
        type="button"
      >
        <span className="menuIcon">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </span>
      </button>

      <Link href="/">
        <a className="hidden mx-auto lg:mr-10 lg:flex">
          <span className="sr-only">Medsy</span>
          <Logo width="110px" id="medsy-header-logo" />
        </a>
      </Link>

      <div className="w-full ml-10px mr-20px lg:mr-10 lg:ml-auto lg:flex lg:justify-center">
        <Search />
        {/* {isHome && <Search />} */}
      </div>

      <div className="hidden items-center text-gray-900 mr-10 flex-shrink-0 lg:flex">
        <PhoneIcon />
        <span className="font-semibold text-base text-14px ml-3">
          +84 888-700-140
        </span>
      </div>

      <button
        className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none"
        onClick={showCart}
        aria-label="cart-button"
        type="button"
      >
        <CartIcon width="20px" height="20px" />
        <span
          className="w-18px h-18px flex items-center justify-center bg-gray-900 text-white absolute rounded-full"
          style={{ fontSize: '10px', top: '-10px', right: '-10px' }}
        >
          {itemsCount}
        </span>
      </button>
    </header>
  );
}
