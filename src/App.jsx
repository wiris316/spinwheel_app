import { useContext, useState, useEffect } from 'react'
import './App.scss'
import PieChart from './components/PieChart'
import InputBox from './components/InputBox'
import DarkModeToggle from './components/DarkModeToggle'
import ResultBox from './components/ResultBox'
import Animation from './components/Animation'
import InstructionMain from './components/InstructionMain'
import Instruction1 from './components/Instruction1'
import Instruction2 from './components/Instruction2'
import MissingInputDialog from './components/MissingInputDialog'
import FullWheelDialog from './components/FullWheelDialog'
import ChoiceList from './components/ChoiceList'
import SuggestionBox from './components/SuggestionBank'
import { StoreContext } from './utils/store'
import { motion } from "framer-motion"
import redArrow from "./assets/redArrow.png"


function App() {

  const { rotate, setRotate, spinButton, setSpinButton, result, setResult, data, emptyInput, setEmptyInput, fullWheel, shownInstructions, setShownInstructions} = useContext(StoreContext)
  
  function checkCookie() {
      let temp = document.cookie.split('; ')
      
      for (let i = 0; i < temp.length; i++) {
        let key = 'wheel-a-choice';
        if (temp[i].split('=')[0] === key) {
          setShownInstructions(false)
        } else {
          setTimeout(() => {
            document.cookie = `wheel-a-choice=true`;
          }, [5000])
        }
      }
  }
  
  checkCookie();
  

  


  const handleSpin = () => {

    // when users click 'stop', spin random millisec before stop
    
    if (data.length) {
      
      let tempSpinButton = document.getElementById('spin-button')
      
      if (spinButton === 'stop') {
        
        setSpinButton(' . . . . ')
        
        const randomTime = Math.floor(Math.random() * (1000 - 200) + 1000)
        
        setTimeout(() => {
          setResult(true)
          setRotate(!rotate)
          setSpinButton('spin')
          tempSpinButton.style.color = 'rgb(108, 105, 147)'
        }, randomTime);
        
      } else if (spinButton === ' . . . . ') {
        console.log(' . . . . . ')
        
      } else {
        setResult(false)
        setSpinButton('stop')
        tempSpinButton.style.color = 'red'
        setRotate(!rotate);
        
      }
    } else {
      handleClickOpen()
    }
    
  
  }
  

  
const handleClickOpen = () => {
  setEmptyInput(true);
};

  

  return (
    <>
      {shownInstructions && <InstructionMain /> }
      <h1>WHEEL-A-CHOICE</h1>
      <main>
        <section id="center">
      <DarkModeToggle/>
          <Instruction1/>
          <InputBox />
          <div id="spin">
            <button id="spin-button" onClick={handleSpin} >{spinButton}</button>
          </div>

          <div id="arrow-button" /*ref={arrowClick} onClick={getClickPosition} */>
            <img src={redArrow} alt="arrow"/>
          </div>

          <Instruction2/>

          <Animation/>
          {result && <ResultBox />}

        </section>
        <section id="choice-list-section">
        {data.length? <ChoiceList /> : null}
        <SuggestionBox/>
        </section>
        
      </main>
      
      {emptyInput && <MissingInputDialog/>}
      {fullWheel && <FullWheelDialog/>}
    </>
  )
}

export default App




