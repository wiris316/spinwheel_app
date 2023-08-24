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
  let items = 1; 

  for (let i = data.length-1; i >= 0; i--) {
    resultObj[data[i]] = Math.floor(sliceDegree * (items++))
  }

  console.log(resultObj)

  for (const [key, value] of Object.entries(resultObj)) {
    if (tempDegree < value) {
      setResult(key)
      // console.log('key here', key)
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


