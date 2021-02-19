import { createContext, useState, useContext } from 'react';

const categoryContext = createContext({} as any);

export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState('');
  return (
    <categoryContext.Provider value={{ category, setCategory }}>
      {children}
    </categoryContext.Provider>
  );
};

export const useCategory = () => useContext(categoryContext);
