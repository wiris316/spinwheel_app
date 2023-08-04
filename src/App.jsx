import { useContext, useState, useEffect } from 'react'
import './App.scss'
import PieChart from './components/PieChart'
import InputBox from './components/InputBox'
import { StoreContext } from './utils/store'
import { motion } from "framer-motion"


function App() {
  
  const randomNum = Math.floor(Math.random() * (2-1))
  const variants = {
    rotate: { rotate: [0, 0, 5000, 0, 0], transition: { repeat: Infinity, duration: 0.2 } },
    stop: { rotate: [0, 0, 0], transition: { repeat: 0, repeatDelay: 0 } }
  };
  const [rotate, setRotate] = useState(false)
  const [spinButton, setSpinButton] = useState('spin')

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
      <motion.div
        className="box"
        variants ={variants}
        animate={
          // scale: [1, 2, 2, 1, 1],
          // rotate: [0, 0, 180, 0, 0],
          rotate ? 'rotate' : 'stop'
          // borderRadius: ["0%", "0%", "50%", "50%", "0%"]
          }
        transition={{
          // duration: 1,
          ease: "linear",
          // times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          // repeatDelay: 0
          }}>
          <PieChart/>
      </motion.div>
    </>
  )
}

export default App




