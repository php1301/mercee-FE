/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
import { useMemo } from 'react';

export const useSearchable = (data, category, searchText, searchProps) => useMemo(() => {
  const regex = new RegExp(searchText, 'i');
  let _data = data;
  if (category) {
    _data = _data.filter((item) => item.category_ids.split(',')?.includes(category));
  }
  return _data.filter((item) => searchProps(item).some((sp) => regex.test(sp)));
}, [data, searchText, searchProps]);
// const useSearchable = <T>(data: T[], searchText: string, searchProps: (item: T) => string[]) => {
//   return useMemo(() => {
//     const regex = new RegExp(searchText, "i");
//     return data.filter((item) =>
//       searchProps(item).some((sp) => regex.test(sp))
//     );
//   }, [data, searchText, searchProps]);
// };
// export default useSearchable;
