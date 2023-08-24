import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from '../utils/store';
import '../assets/ResultBox.scss'

function ResultBox() {
  
  const { result, setResult, data, tempDegree } = useContext(StoreContext)
  
  // useEffect(() => {  
  // }, [result])
  
  let inputs = data.length;
  const sliceDegree = 360 / inputs;
  const resultObj = {}

  for (let i = 0; i < data.length; i++) {
    resultObj[data[i]] = Math.floor(sliceDegree * (i + 1)) 
    if (i > 0) {
      resultObj[data[i]] = Math.floor(sliceDegree * inputs)
      inputs--;
    }
  }

  console.log('resultobj', resultObj)
  
  for (const [key, value] of Object.entries(resultObj)) {
    if (tempDegree < value && tempDegree > value-sliceDegree) {
      console.log('tempdegree',tempDegree)
      setResult(key)
      console.log('key', key)
      break;
    } else if (tempDegree === 0 || tempDegree === value) {
      setResult('Try Again')
    }
  }

  return (
    
    <>
      <div id="result-box">{result}</div>
    </>
  )
}

export default ResultBox;