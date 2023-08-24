import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from '../utils/store';
import MissingInputDialog from './MissingInputDialog';
import '../assets/InputBox.scss';
// import {Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions, Button} from '@mui/material';


export default function InputBox() {
  
  const { parts, setParts, emptyInput, setEmptyInput } = useContext(StoreContext)
  const { data, setData } = useContext(StoreContext)
  const [input, setInput] = useState('')
  
  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (input.length <= 0) {
      handleClickOpen();
    } else if (data.length < 12 && input.length > 0) {
      const newParts = [...parts, 1]
      setParts(newParts)
      const newData = [...data, input]
      setData(newData);
      setInput('')
    } else {
      alert('the wheel is full')
    }
  }


  const handleClickOpen = () => {
    setEmptyInput(true);
  };


  
  return (
    <>
      <form>
        <input name="ToDoBox" type='text' maxLength={8} placeholder='' onChange={handleInput} value={input}></input>
        <button name="ToDoBox" onClick={handleSubmit} >Submit</button>

      </form>
      

      {emptyInput && <MissingInputDialog />}


    </>
  )
}