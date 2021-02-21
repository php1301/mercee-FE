import React, { useContext } from 'react';
import ItemCard from 'components/item-card';
import { DrawerContext } from 'contexts/drawer/drawer.provider';
import { useSearch } from 'contexts/search/use-search';
import { useSearchable } from 'hooks/use-searchable';
import NotFound from 'assets/icons/not-found';
import { useCategory } from 'contexts/category/category.provider';

// Lấy ref của component Products forward cho div dưới
// Debug bằng console.log ref.current
// ref.current lúc này sẽ point to cái thẻ div ở dưới
const Products = React.forwardRef(({ items }: any, ref: React.RefObject<HTMLDivElement>) => {
  const { dispatch } = useContext(DrawerContext);

  const { searchTerm } = useSearch();
  const { category } = useCategory();
  // searchProps as function. Because we don’t know,
  // what properties of an object we have to test to determine
  // if the object matches the search.
  // So we take it as an argument.
  // Given the object, return the array of string to test again searchText
  // To determine it matches or not.
  const searchableItems = useSearchable(
    items,
    category,
    searchTerm,
    (item) => [item.name],
  );
  const showDetails = (item) => {
    dispatch({
      type: 'STORE_PRODUCT_DETAIL',
      payload: {
        item,
      },
    });

    dispatch({
      type: 'SLIDE_CART',
      payload: {
        open: true,
      },
    });

    dispatch({
      type: 'TOGGLE_PRODUCT_DETAIL',
      payload: {
        showDetails: true,
      },
    });
  };

  return (
    <div className="w-full py-10" ref={ref} id="myScrollToElement">
      {searchableItems.length ? (
        <div className="grid grid-cols-2 col-gap-3 row-gap-6 md:grid-cols-3 md:col-gap-4 md:row-gap-8 lg:grid-cols-4 lg:col-gap-4 lg:row-gap-10 xxl:grid-cols-5 xxl:col-gap-4 xxl:row-gap-12 2xxl:grid-cols-7 2xxl:col-gap-5 2xxl:row-gap-12">
          {searchableItems.map((item: { id: any; }) => (
            <ItemCard
              key={item.id}
              item={item}
              onClick={() => showDetails(item)}
            />
          ))}
        </div>
      ) : (
        <div className="pt-10px md:pt-40px lg:pt-20px pb-40px">
          <NotFound width="100%" />
          <h3 className="text-24px text-gray-900 font-bold mt-35px mb-0 text-center">
            No product found :(
          </h3>
        </div>
      )}
    </div>
  );
});

export default Products;
