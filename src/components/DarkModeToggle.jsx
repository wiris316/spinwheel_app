import React, { useState, useContext, useEffect } from 'react';
import {StoreContext} from '../utils/store';
import "../assets/DarkModeToggle.scss";

const DarkModeToggle = () => {
  
  const {selectedSuggestion} = useContext(StoreContext)
  const [toggled, setToggled] = useState(false)
  const bgColor = document.body
  const fontColor = document.querySelectorAll('p')
  const headerColor = document.querySelectorAll("h1, h3,h4, h5, h6")

  useEffect(() => {
  
      if (toggled === true) {
        bgColor.style.backgroundColor = 'rgb(49, 58, 93)'
        fontColor.forEach((ele) => {
          ele.style.color = 'white'
        })
        headerColor.forEach((ele) => {
          ele.style.color = 'lightpink';
        })
      } else {
        bgColor.style.backgroundColor = '#9bbdf9bd'
        fontColor.forEach((ele) => {
          ele.style.color = 'rgb(108, 105, 147)'
        })
        headerColor.forEach((ele) => {
          ele.style.color = 'rgb(89, 87, 118)' 
        })
      }

  }, [toggled, selectedSuggestion])

  

  const handleToggle = () => {
    setToggled(!toggled)
  }

  return (
    <div id="switch-container" title="Dark Mode">
    <label className="switch">
      <input type="checkbox" onClick={handleToggle}></input>
      <span className="slider round"></span>
    </label>
    </div>
  )
}

export default DarkModeToggle;