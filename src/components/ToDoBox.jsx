import React, { useState, useContext } from 'react';
import { StoreContext } from '../utils/store';

export default function ToDoBox() {

  const {data, setData} = useContext(StoreContext)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    data.push(1)
    console.log('new data here', data)
    setData(data)
  }

  
  return (
    <form>
      <label htmlFor="ToDoBox" >Add to list: </label>
      <input name="ToDoBox" type='text' placeholder='' ></input>
      <button name="ToDoBox" onClick={handleSubmit} >Submit</button>
    </form>
  )
}