import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from '../utils/store';


export default function ToDoBox() {

  const { parts, setParts } = useContext(StoreContext)
  const { data, setData } = useContext(StoreContext)
  let input; 
  
  const handleInput = (e) => {
    input = e.target.value;
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newParts = [...parts, 1]
    setParts(newParts)
    const newData = [...data, input]
    setData(newData)
    e.target.value = ''
  }

  
  return (
    <>
      <form>
        <label htmlFor="ToDoBox" >Add to list: </label>
        <input name="ToDoBox" type='text' placeholder='' onChange={handleInput}></input>
        <button name="ToDoBox" onClick={handleSubmit} >Submit</button>

      </form>

    </>
  )
}