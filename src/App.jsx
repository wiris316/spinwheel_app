import { useContext, useState, useEffect } from 'react'
import './App.scss'
import PieChart from './components/PieChart'
import InputBox from './components/InputBox'
import Animation from './components/Animation'
import { StoreContext } from './utils/store'
import { motion } from "framer-motion"


function App() {
  
  const randomNum = Math.floor(Math.random() * (2-1))
  const variants = {
    rotate: { rotate: [0, 0, 5000, 0, 0], transition: { repeat: Infinity, duration: 0.2 } },
    stop: { rotate: [0, 0, 0], transition: { repeat: 0, repeatDelay: 0 } }
  };

  const { rotate, setRotate, spinButton, setSpinButton } = useContext(StoreContext)

  const handleSpin = () => {
    // let newRotate = !rotate
    setRotate(!rotate);
    spinButton === 'spin' ? setSpinButton('stop') : setSpinButton('spin')
  }

  useEffect(() => {
  }, [rotate])

  return (
    <>
      <InputBox />
      <div id="InputBox">
        <button id="spin-button" onClick={handleSpin} >{spinButton}</button>
      </div>
      {/* <img src="../assets/images.png"/> */}
      <Animation/>
    </>
  )
}

export default App




