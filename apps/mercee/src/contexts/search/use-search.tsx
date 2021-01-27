/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const SearchContext = createContext({} as any);

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
