import { useContext } from 'react';
import { StoreContext } from '../utils/store';
import '../assets/InputBox.scss';
import {Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions, Button} from '@mui/material';


const InstructionMain = () => {
  const {setShownInstructions} = useContext(StoreContext)

  const handleClose = () => {
    setShownInstructions(false);
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
              {"Introduction"} 
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" fontSize="20px">
                  Do you have trouble making decisions? Wheel-A-Choice can help by randomizing your options and choosing for you when you spin the wheel. 
                  <br/>
                  <br/>
                  This app is helpful when you can't decide what to eat, where to go, or if you just need a little help making a decision today.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>OK</Button>
          </DialogActions>
      </Dialog>
    </div>
  )
}


export default InstructionMain;