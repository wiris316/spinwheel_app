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
  const [finishSpin, setFinishSpin] = useState(false)

  const handleSpin = () => {

    // when users click 'stop', spin another 800 millisec before stop
    
    let tempSpinButton = document.getElementById('spin-button')

    // if (spinButton === ' . . . . . ') {
    //   setTimeout(() => {
    //     setRotate(!rotate)
    //     setSpinButton('spin')
    //     tempSpinButton.style.color = 'black'
    //     // arrowClick.click();
    //     // document.elementFromPoint(536, 91).click();
        
    //   }, 0);
      
    if (spinButton === 'stop'){
      
      setSpinButton(' . . . . ')
      
      setTimeout(() => {
        setRotate(!rotate)
        setSpinButton('spin')
        tempSpinButton.style.color = 'black'

        setFinishSpin(true)

      }, 500);
      
    } else {
      setSpinButton('stop')
      tempSpinButton.style.color = 'red'
      setRotate(!rotate);

    }
    
  
    // document.elementFromPoint(423, 300).click();
    // spinButton === 'spin' ? setSpinButton('stop') : setSpinButton('spin')
  }
  
  useEffect(() => {
    
    if (finishSpin) {
      const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    
      const pixelX = (50/ 100) * viewportWidth;
      const pixelY = (32/ 100) * viewportHeight;
      console.log(pixelX, pixelY)
    
      setTimeout(() => document.elementFromPoint(pixelX, pixelY).click(), 2000)
      
      setFinishSpin(false)
      
    }


  }, [finishSpin])



function getClickPosition(e) {
  var xPosition = e.clientX;
  var yPosition = e.clientY;

  console.log(xPosition, yPosition)
}

  return (
    <>
      <main id="center">
        <InputBox />
        <div id="spin">
          <button id="spin-button" onClick={handleSpin} >{spinButton}</button>
        </div>

        <button id="arrow-button" ref={arrowClick} onClick={getClickPosition}>
          <img src={redArrow} alt="arrow"/>
        </button>

        <Animation/>

      </main>
    </>
  )
}

export default App




