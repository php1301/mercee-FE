/* eslint-disable import/prefer-default-export */
import React from 'react';
// Sử dụng chủ yếu cho drawer
// Ở drawer đã sử dụng kĩ thuật css áp 1 lớp overlay lên nên cũng không cần thiết
export const useOnClickOutside = (ref, handler) => {
  React.useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener('click', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('click', listener);
        document.removeEventListener('touchstart', listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler],
  );
};
