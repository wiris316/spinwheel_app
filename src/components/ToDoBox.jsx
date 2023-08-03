import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from '../utils/store';


export default function ToDoBox() {

  const { data, setData } = useContext(StoreContext)
  

  const handleSubmit = (e) => {
    e.preventDefault()
    const newData = [...data, 1]
    setData(newData)
  }

  
  return (
    <>
      <form>
        <label htmlFor="ToDoBox" >Add to list: </label>
        <input name="ToDoBox" type='text' placeholder='' ></input>
        <button name="ToDoBox" onClick={handleSubmit} >Submit</button>

      </form>

    </>
  )
}