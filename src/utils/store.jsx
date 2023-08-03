import React from 'react';
import {useState} from 'react';

export const StoreContext = React.createContext(null);

const StoreProvider = ({ children }) => {
  const [data, setData] = useState([1])

  return (
    <StoreContext.Provider
      value={{
        data,
        setData
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;