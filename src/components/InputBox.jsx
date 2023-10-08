import { useState, useContext } from 'react';
import { StoreContext } from '../utils/store';
import MissingInputDialog from './MissingInputDialog';
import '../assets/InputBox.scss';


export default function InputBox() {
  
  const { parts, setParts, emptyInput, setEmptyInput,setFullWheel } = useContext(StoreContext)
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
      setFullWheel(true)
    }
  }

  const handleClickOpen = () => {
    setEmptyInput(true);
  };
  
  return (
    <>
      <form>
        <input name="choice-box" type='text' maxLength={15} placeholder='' onChange={handleInput} value={input}></input>
        <button name="choice-box" onClick={handleSubmit} >submit</button>

      </form>
      

      {emptyInput && <MissingInputDialog />}


    </>
  )
}