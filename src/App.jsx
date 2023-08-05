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
  const variants = {
    rotate: { rotate: [0, 0, 5000, 0, 0], transition: { repeat: Infinity, duration: 0.2 } },
    stop: { rotate: [0, 0, 0], transition: { repeat: 0, repeatDelay: 0 } }
  };

  const { rotate, setRotate, spinButton, setSpinButton } = useContext(StoreContext)

  const handleSpin = () => {

    // when users click 'stop', spin another 800 millisec before stop
    
    let tempSpinButton = document.getElementById('spin-button')

    if (spinButton === 'stopping') {
      setTimeout(() => {
        setRotate(!rotate)
        setSpinButton('spin')
        tempSpinButton.style.color = 'black'
      }, 800);

    } else if (spinButton === 'stop'){

      setSpinButton('stopping')
      tempSpinButton.style.color = 'red'
      
      setTimeout(() => {
        setRotate(!rotate)
        setSpinButton('spin')
        tempSpinButton.style.color = 'black'
      }, 800);
      
    } else {
      setSpinButton('stop')
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
        <img src={redArrow} alt="arrow"/>
        <Animation/>

      </main>
    </>
  )
}

export default App




