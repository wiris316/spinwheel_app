import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from '../utils/store';
import '../assets/InputBox.scss';
import {Dialog, DialogContent, DialogContentText, DialogTitle} from '@mui/material';


export default function InputBox() {
  
  const { parts, setParts } = useContext(StoreContext)
  const { data, setData } = useContext(StoreContext)
  const [input, setInput] = useState('')
  const [emptyInput, setEmptyInput] = useState(false);
  
  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (input.length <= 0) {
      // alert('Please type in your input')
      handleClickOpen();
    } else if (input.length > 0) {
      const newParts = [...parts, 1]
      setParts(newParts)
      const newData = [...data, input]
      setData(newData);
      setInput('')
    } 
  }


  
  const handleClickOpen = () => {
    setEmptyInput(true);
  };

  const handleClose = () => {
    setEmptyInput(false);
  };


  
  return (
    <>
      <form>
        <input name="ToDoBox" type='text' maxLength={8} placeholder='' onChange={handleInput} value={input}></input>
        <button name="ToDoBox" onClick={handleSubmit} >Submit</button>

      </form>
      
      <div>
      <Dialog
        open= {emptyInput}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        scroll="paper"
        sx={{
          "& .MuiDialog-container": {
          alignItems: "flex-start",
          },
        }}
        PaperProps={{ sx: { mt: "300px" } }}
      >
        <DialogTitle id="alert-dialog-title">
          {"Missing Input:"} 
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" fontSize="20px">
            Please type in your input
          </DialogContentText>
        </DialogContent>
        </Dialog>
        </div>


    </>
  )
}