import { useContext, useState, useEffect } from 'react'
import './App.scss'
import PieChart from './components/PieChart'
import InputBox from './components/InputBox'
import ResultBox from './components/ResultBox'
import Animation from './components/Animation'
import Instruction from './components/Instruction1'
import Instruction2 from './components/Instruction2'
import MissingInputDialog from './components/MissingInputDialog'
import FullWheelDialog from './components/FullWheelDialog'
import ChoiceList from './components/ChoiceList'
import { StoreContext } from './utils/store'
import { motion } from "framer-motion"
import redArrow from "./assets/redArrow.png"


function App() {
  
  // const randomNum = Math.floor(Math.random() * (1000-500) + 500)

  const { rotate, setRotate, spinButton, setSpinButton, result, setResult, data, emptyInput, setEmptyInput, fullWheel } = useContext(StoreContext)
  const [finishSpin, setFinishSpin] = useState(false)
  


  const handleSpin = () => {

    // when users click 'stop', spin another 1000 millisec before stop
    
    if (data.length > 1 ) {
      
      let tempSpinButton = document.getElementById('spin-button')
      
      if (spinButton === 'stop') {
        
        setSpinButton(' . . . . ')
        
        const randomTime = Math.floor(Math.random() * (1000 - 500) + 800)
        console.log('random time', randomTime)
        
        setTimeout(() => {
          setResult(true)
          setRotate(!rotate)
          setSpinButton('spin')
          tempSpinButton.style.color = 'rgb(108, 105, 147)'
  
          setFinishSpin(true)
  
        }, randomTime);
        
      } else if (spinButton === ' . . . . ') {
        console.log(' . . . . . ')
        
      } else {
        setResult(false)
        setSpinButton('stop')
        tempSpinButton.style.color = 'red'
        setRotate(!rotate);
        
        setFinishSpin(!finishSpin)
      }
    } else {
      handleClickOpen()
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


  }, [finishSpin, data])



///////////////////////////////////////////
////////// FOR TESTING PURPOSE ////////////
//////////////////////////////////////////////

// function getClickPosition(e) {
//   var xPosition = e.clientX;
//   var yPosition = e.clientY;

//   console.log(xPosition, yPosition)
// }
  
const handleClickOpen = () => {
  setEmptyInput(true);
};

  

  return (
    <>
      <h1>Wheel-A-Choice</h1>
      <main>

        <section id="center">
          <Instruction/>
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
        
        {/* <ChoiceList /> */}
        
      </main>
      
      {emptyInput && <MissingInputDialog/>}
      {fullWheel && <FullWheelDialog/>}
    </>
  )
}

export default App




