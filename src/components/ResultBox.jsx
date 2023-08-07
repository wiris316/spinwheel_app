import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from '../utils/store';
import '../assets/ResultBox.scss'

function ResultBox() {
  
  const {result} = useContext(StoreContext)

  return (
    
    <>
      <div id="result-box">{result}</div>
    </>
  )
}

export default ResultBox;