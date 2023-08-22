import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from '../utils/store';
import '../assets/ChoiceList.scss'

const ChoiceList = () => {
  
  const {data} = useContext(StoreContext)
  
  const list = data.map((item) => 
    <li>{item}</li>)
  
  console.log(data)

  return (
      <ul id="data-list">
        {/* {data.map((item, i) => {
          <li>{item}</li>
        })} */}
        {list}
      </ul>

  )
  
}

export default ChoiceList;