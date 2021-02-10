import React, { useContext } from 'react';
import { DrawerContext } from 'contexts/drawer/drawer.provider';
import ProductDetails from './views/product-details';
import Cart from './views/cart';
import Checkout from './views/checkout';
import DrawerMenu from './views/menus';

export const CartDrawer: React.FC = () => {
  const { state, dispatch } = useContext(DrawerContext);

  const handleClose = () => dispatch({
    type: 'SLIDE_CART',
    payload: {
      open: false,
    },
  });

  const drawerComponent = (cartDrawerState) => {
    if (cartDrawerState?.showDetails === true) {
      return <ProductDetails />;
    }

    if (cartDrawerState?.showCart === true) {
      return <Cart />;
    }

    if (cartDrawerState?.showCheckout === true) {
      return <Checkout />;
    }

    return <Cart />;
  };

  return (
    <>
      {state?.open === true ? (
        <div
          className="overlay"
          role="presentation"
          onKeyUp={handleClose}
          onClick={handleClose}
        />
      ) : (
        ''
      )}
      <div
        className={`drawer drawer-cart ${state?.open === true ? 'open' : ''}`}
      >
        {drawerComponent(state)}
      </div>
    </>
  );
};

export const Drawer = () => {
  const { state, dispatch }: any = useContext(DrawerContext);

  const handleClose = () => dispatch({
    type: 'OPEN_MENU',
    payload: {
      menu: false,
    },
  });

  return (
    <>
      {state?.menu === true ? (
        <div
          className="overlay overlay-menu"
          role="presentation"
          onKeyUp={handleClose}
          onClick={handleClose}
        />
      ) : (
        ''
      )}
      <div
        className={`drawer drawer-menu ${state?.menu === true ? 'open' : ''}`}
      >
        <DrawerMenu />
      </div>
    </>
  );
};
