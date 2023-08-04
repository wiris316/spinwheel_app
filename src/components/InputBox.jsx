import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from '../utils/store';
import '../assets/InputBox.scss'


export default function InputBox() {

  const { parts, setParts } = useContext(StoreContext)
  const { data, setData } = useContext(StoreContext)
  const [input, setInput] = useState('')
  
  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newParts = [...parts, 1]
    setParts(newParts)
    const newData = [...data, input]
    setData(newData);
    setInput('')
  }

  
  return (
    <>
      <form>
        <label htmlFor="ToDoBox" >Add to list: </label>
        <input name="ToDoBox" type='text' placeholder='' onChange={handleInput} value={input}></input>
        <button name="ToDoBox" onClick={handleSubmit} >Submit</button>

      </form>

    </>
  )
}