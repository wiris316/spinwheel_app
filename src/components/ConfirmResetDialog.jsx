import {useContext} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { StoreContext } from '../utils/store';


export default function ConfirmResetDialog() {

  let tempSpinButton = document.getElementById('spin-button')

  const {reset, setReset, setData, setParts, setResult, setRotate, setSpinButton} = useContext(StoreContext)


  const handleClose = () => {
    setReset(false)
  }

  const handleReset= () => {
    setData([])
    setParts([])
    setResult('')
    setRotate(false)
    setSpinButton('spin')
    tempSpinButton.style.color = 'rgb(108, 105, 147)'
    setReset(false);
  };

  return (
    <div>
      <Dialog
        open={reset}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Reset"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to reset and clear your choices?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleReset} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}