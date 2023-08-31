import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from '../utils/store';
import '../assets/SuggestionBox.scss'

function SuggestionBox(props) {
  
  const { result, setResult, data, setData,parts, setParts, itemsObj, setItemsObj, tempDegree, setTempDegree, selectedSuggestion, setSelectedSuggestion } = useContext(StoreContext)
  const { value, titles } = props;

  const items = value.map((ele) => <p>{ele}</p>)
  
  const handleSelect = () => {
    setData(value)
    let tempParts = [];
    let tempObj = {};
    value.forEach((ele) => {
      if (tempObj[ele]) {
        tempObj[ele]++;
      } else {
        tempObj[ele] = 1;
      }
      tempParts.push(1)
    })
    console.log('tempObj', tempObj)
    setSelectedSuggestion(true)
    setParts(tempParts)
    setTempDegree(0)
    // setItemsObj(tempObj)
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


