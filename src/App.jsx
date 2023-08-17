import { useContext, useState, useEffect } from 'react'
import './App.scss'
import PieChart from './components/PieChart'
import InputBox from './components/InputBox'
import ResultBox from './components/ResultBox'
import Animation from './components/Animation'
import Instruction from './components/Instruction'
import { StoreContext } from './utils/store'
import { motion } from "framer-motion"
import redArrow from "./assets/redArrow.png"


function App() {
  
  const randomNum = Math.floor(Math.random() * (2-1))

  const { rotate, setRotate, spinButton, setSpinButton, result, setResult, data } = useContext(StoreContext)
  const [finishSpin, setFinishSpin] = useState(false)
  

  const handleSpin = () => {

    // when users click 'stop', spin another 800 millisec before stop
    
    if (data.length > 1) {
  
      let tempSpinButton = document.getElementById('spin-button')
        
      if (spinButton === 'stop'){
        
        setSpinButton(' . . . . ')
        
        setTimeout(() => {
          setRotate(!rotate)
          setSpinButton('spin')
          tempSpinButton.style.color = 'black'
  
          setFinishSpin(true)
  
        }, 1000);
        
      } else {
        setSpinButton('stop')
        tempSpinButton.style.color = 'red'
        setRotate(!rotate);
        
        setFinishSpin(!finishSpin)
      }
    } else {
      alert('Please input choices')
    }
    
  
    // document.elementFromPoint(423, 300).click();
    // spinButton === 'spin' ? setSpinButton('stop') : setSpinButton('spin')
  }
  
  useEffect(() => {
    
    if (finishSpin) {
      const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    
      const pixelX = (50/ 100) * viewportWidth;
      const pixelY = (30/ 100) * viewportHeight;
      console.log(pixelX, pixelY)
    
      document.elementFromPoint(pixelX, pixelY).click()
      
    }


  }, [finishSpin])



///////////////////////////////////////////
////////// FOR TESTING PURPOSE ////////////
//////////////////////////////////////////////

// function getClickPosition(e) {
//   var xPosition = e.clientX;
//   var yPosition = e.clientY;

//   console.log(xPosition, yPosition)
// }

  return (
    <>
      <main id="center">
        <Instruction/>
        <InputBox />
        <div id="spin">
          <button id="spin-button" onClick={handleSpin} >{spinButton}</button>
        </div>

        <div id="arrow-button" /*ref={arrowClick} onClick={getClickPosition} */>
          <img src={redArrow} alt="arrow"/>
        </div>

        <Animation/>
        {result && <ResultBox />}
      </main>
    </>
  )
}

export default App




