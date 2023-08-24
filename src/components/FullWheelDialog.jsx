import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from '../utils/store';
import '../assets/InputBox.scss';
import {Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions, Button} from '@mui/material';



const FullWheelDialog = () => {
  const {fullWheel, setFullWheel} = useContext(StoreContext)

  const handleClose = () => {
    setFullWheel(false);
  };

  return (
  <div>
  <Dialog
    open= {true}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    scroll="paper"
    color="yellow"
    sx={{
      "& .MuiDialog-container": {
      alignItems: "flex-start",
      },
    }}
      PaperProps={{
        sx: { mt: "300px" },
        style: {
          borderStyle: "solid", 
          borderRadius: "15px"
        }
      }}
  >
    <DialogTitle
      id="alert-dialog-title"
      margin="auto">
        {"Maxed"} 
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description" fontSize="20px">
        The wheel is full
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>OK</Button>
    </DialogActions>
    </Dialog>
    </div>
  )
}


export default FullWheelDialog;