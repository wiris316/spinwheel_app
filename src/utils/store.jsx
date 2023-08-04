import React from 'react';
import {useState} from 'react';

export const StoreContext = React.createContext(null);

const StoreProvider = ({ children }) => {
  const [parts, setParts] = useState([1])
  const [data, setData] = useState([])
  const [rotate, setRotate] = useState(false)
  const [spinButton, setSpinButton] = useState('spin')

  return (
    <StoreContext.Provider
      value={{
        parts,
        setParts,
        data,
        setData,
        rotate, 
        setRotate,
        spinButton,
        setSpinButton
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;