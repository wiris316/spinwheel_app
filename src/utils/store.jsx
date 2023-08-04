import React from 'react';
import {useState} from 'react';

export const StoreContext = React.createContext(null);

const StoreProvider = ({ children }) => {
  const [parts, setParts] = useState([])
  const [data, setData] = useState([])

  return (
    <StoreContext.Provider
      value={{
        parts,
        setParts,
        data,
        setData
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;