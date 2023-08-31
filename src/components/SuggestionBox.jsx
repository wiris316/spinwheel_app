import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from '../utils/store';
import '../assets/SuggestionBox.scss'

function SuggestionBox(props) {
  
  const { result, setResult, data, setData,parts, setParts, tempDegree } = useContext(StoreContext)
  const { value, titles } = props;

  const items = value.map((ele) => <p>{ele}</p>)
  
  const handleSelect = () => {
    setData(value)
    let tempParts = [];
    value.forEach((ele) => tempParts.push(1))
    setParts(tempParts)
    
  }
  
  return (
    <>
      <div id="suggestion-box">
        {/* {suggestionTitle} */}
        {items}
        <button id="select-suggestion-button" onClick={handleSelect}>select</button>
      </div>
    </>
  )
}

export default SuggestionBox;


