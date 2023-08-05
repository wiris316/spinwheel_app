import { useContext, useState, useEffect } from 'react'
import './App.scss'
import PieChart from './components/PieChart'
import InputBox from './components/InputBox'
import Animation from './components/Animation'
import { StoreContext } from './utils/store'
import { motion } from "framer-motion"
import redArrow from "./assets/redArrow.png"


function App() {
  
  const randomNum = Math.floor(Math.random() * (2-1))

  const { rotate, setRotate, spinButton, setSpinButton, arrowClick } = useContext(StoreContext)

  const handleSpin = () => {

    // when users click 'stop', spin another 800 millisec before stop
    
    let tempSpinButton = document.getElementById('spin-button')

    if (spinButton === ' . . . . . ') {
      setTimeout(() => {
        setRotate(!rotate)
        setSpinButton('spin')
        tempSpinButton.style.color = 'black'
        arrowClick.click();
      }, 800);

    } else if (spinButton === 'stop'){

      setSpinButton(' . . . . ')
      tempSpinButton.style.color = 'red'
      
      setTimeout(() => {
        setRotate(!rotate)
        setSpinButton('spin')
        tempSpinButton.style.color = 'black'
      }, 800);

    } else {
      setSpinButton('stop')
      tempSpinButton.style.color = 'red'
      setRotate(!rotate);
    }

    // spinButton === 'spin' ? setSpinButton('stop') : setSpinButton('spin')
  }

  useEffect(() => {
    console.log('rendered')
  }, [rotate])

  return (
    <>
      <main id="center">
        <InputBox />
        <div id="spin">
          <button id="spin-button" onClick={handleSpin} >{spinButton}</button>
        </div>

        <button id="arrow-button" ref={arrowClick}>
          <img src={redArrow} alt="arrow"/>
        </button>

        <Animation/>

      </main>
    </>
  )
}

export default App




