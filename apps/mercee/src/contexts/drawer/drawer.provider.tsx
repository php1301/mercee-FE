/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useReducer, createContext } from 'react';
import reducer from './drawer.reducer';

export const DrawerContext = createContext<{
  state?: any;
  dispatch?: React.Dispatch<any>;
}>({});

const INITIAL_STATE = {
  showDetails: false,
  showCart: false,
  showCheckout: false,
  menu: false,
  open: false,
  item: [],
};

export const DrawerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <DrawerContext.Provider value={{ state, dispatch }}>
      {children}
    </DrawerContext.Provider>
  );
};
