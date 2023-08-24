import React from 'react';
import {useState} from 'react';

export const StoreContext = React.createContext(null);

const StoreProvider = ({ children }) => {
  const [parts, setParts] = useState([])
  const [data, setData] = useState([])
  const [result, setResult] = useState('')
  const [rotate, setRotate] = useState(false)
  const [spinButton, setSpinButton] = useState('spin')
  const [emptyInput, setEmptyInput] = useState(false)
  const [tempDegree,setTempDegree] = useState(0)

  return (
    <StoreContext.Provider
      value={{
        parts,
        setParts,
        data,
        setData,
        result,
        setResult,
        rotate, 
        setRotate,
        spinButton,
        setSpinButton, 
        emptyInput, 
        setEmptyInput,
        tempDegree, 
        setTempDegree
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;