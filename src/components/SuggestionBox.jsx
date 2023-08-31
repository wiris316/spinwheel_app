import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from '../utils/store';
import '../assets/SuggestionBox.scss'

function SuggestionBox(props) {
  
  const { result, setResult, data, setData,parts, setParts, tempDegree } = useContext(StoreContext)
  const { suggestions, titles } = props;

  // const list = value.map((ele) => <p>{ele}</p>)

  // const items = value
  
  const handleSelect = () => {
    setData(value)
  }
  
  return (
    <>
      <div id="suggestion-box">
        {/* {suggestionTitle} */}
        {/* {list} */}
        <button id="select-suggestion-button" onClick={handleSelect}>select</button>
      </div>
    </>
  )
}

export default SuggestionBox;


