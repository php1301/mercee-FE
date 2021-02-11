import { useContext } from 'react';
import Scrollbar from 'components/scrollbar';
import { useCart } from 'contexts/cart/cart.provider';
import { DrawerContext } from 'contexts/drawer/drawer.provider';
import CartItem from 'components/cart-item';
import Button from 'components/button';
import ArrowLeft from 'assets/icons/arrow-left';
import { CURRENCY } from 'settings/constants';
import NoItem from './no-item';

export default function Cart() {
  const { dispatch } = useContext(DrawerContext);

  const { items, calculatePrice } = useCart();

  const showCheckout = () => {
    dispatch({
      type: 'TOGGLE_CHECKOUT_VIEW',
      payload: {
        showCheckout: true,
      },
    });
  };

  const hideCart = () => {
    dispatch({
      type: 'SLIDE_CART',
      payload: {
        open: false,
      },
    });
  };

  return (
    <div className="flex flex-col w-full h-full">
      {items.length ? (
        <>
          <div className="w-full flex justify-center relative px-30px py-20px border-b border-gray-200">
            <button
              className="w-auto h-10 flex items-center justify-center text-gray-500 absolute top-half -mt-20px left-30px transition duration-300 focus:outline-none hover:text-gray-900"
              onClick={hideCart}
              aria-label="close"
              type="button"
            >
              <ArrowLeft />
            </button>

            <h2 className="font-bold text-24px m-0">Your Basket</h2>
          </div>

          <Scrollbar className="cart-scrollbar flex-grow">
            {items.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </Scrollbar>
        </>
      ) : (
        <NoItem />
      )}

      <div className="flex flex-col p-30px">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-900">
            Subtotal &nbsp;
            <span className="font-normal text-gray-700 text-13px">
              (Incl. VAT)
            </span>
          </span>

          <span className="font-semibold text-18px text-gray-900">
            {CURRENCY}
            {calculatePrice()}
          </span>
        </div>

        <Button
          className="big mt-20px"
          disabled={!items.length}
          onClick={showCheckout}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
}
