import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from '../utils/store';
import '../assets/SuggestionBox.scss'

function SuggestionBox(props) {
  
  const { reset, setData, data, parts, setParts, itemsObj, setItemsObj, tempDegree, setTempDegree, selectedSuggestion, setSelectedSuggestion } = useContext(StoreContext)
  const { value, titles } = props;


  useEffect(() => {

    if (data.length == 0) {
      switchSelectDefault();
    }
    
  }, [data])
  
  const items = value.map((ele) => <p>{ele}</p>)
  const allSelectButtons = document.getElementsByClassName('select-suggestion-button')

  const switchSelectDefault = () => {
    for (let i = 0; i < allSelectButtons.length; i++) {
      allSelectButtons[i].innerHTML = 'select'
      allSelectButtons[i].style.color = 'rgb(108, 105, 147)'
      allSelectButtons[i].style.backgroundColor='white'
    }
  }

  
  const handleSelect = (e) => {
    switchSelectDefault();
    setData(value)
    // setClicked(!clicked)
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
    setSelectedSuggestion(true)
    setParts(tempParts)
    setTempDegree(0)
    setItemsObj(tempObj)
    e.target.innerHTML = 'selected'
    e.target.style.color = 'white'
    e.target.style.backgroundColor = 'rgb(108, 105, 147)'
    
  }

  
  
  return (
    <>
      <div id="suggestion-box">
        {/* {suggestionTitle} */}
        {titles}
        {items}
        <button className="select-suggestion-button" onClick={handleSelect} >select</button>
      </div>
    </>
  )
}

export default SuggestionBox;


