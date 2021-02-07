import { useContext } from 'react';
import { DrawerContext } from 'contexts/drawer/drawer.provider';
import ArrowLeft from 'assets/icons/arrow-left';
import EmptyCartSVG from 'assets/icons/empty-svg';

export default function NoItem() {
  const { dispatch } = useContext(DrawerContext);
  const hideCart = () => {
    dispatch({
      type: 'SLIDE_CART',
      payload: {
        open: false,
      },
    });
  };

  return (
    <>
      <div className="w-full flex justify-center flex-shrink-0 relative px-30px py-20px mb-30px border-b border-gray-200">
        <button
          className="w-auto h-10 flex items-center justify-center text-gray-500 absolute top-1/2 -mt-20px left-30px transition duration-300 focus:outline-none hover:text-gray-900"
          onClick={hideCart}
          aria-label="close"
          type="button"
        >
          <ArrowLeft />
        </button>
        <h2 className="font-semibold text-21px m-0">No items in Your Basket</h2>
      </div>

      <div className="flex-auto">
        <p className="text-center text-gray-900 px-10 leading-loose">
          You have not added anything in your cart yet. Start adding the products
          you like.
        </p>

        <div className="flex items-center justify-center mt-40px md:mt-95px">
          <EmptyCartSVG />
        </div>
      </div>
    </>
  );
}
