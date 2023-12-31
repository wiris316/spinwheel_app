import { useContext, useEffect } from 'react';
import { StoreContext } from '../utils/store';
import '../assets/ResultBox.scss'

function ResultBox() {
  
  const { result, setResult, data, tempDegree } = useContext(StoreContext)
  let inputs = data.length;
  const sliceDegree = 360 / inputs;
  const resultObj = new Map()
  let items = 1; 
  
  useEffect(() => {
  }, [result])
  
  for (let i = data.length-1; i >= 0; i--) {
    resultObj.set(`${data[i]}_${i}`, Math.floor(sliceDegree * (items++)))
  }

  for (const [key, value] of resultObj.entries()) {
    if (tempDegree === 0 || tempDegree == value) {
      setResult('Spin Again')
      break;
    } else if (tempDegree < value) {
      let newKey = key.split('_')
      setResult(newKey[0])
      break;
    } 
  }

  return (
    <>
      <div id="result-box">{result}</div>
    </>
  )
}

export default ResultBox;


