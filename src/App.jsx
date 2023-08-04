import { useContext, useState, useEffect } from 'react'
import './App.scss'
import PieChart from './components/PieChart'
import InputBox from './components/InputBox'
import { StoreContext } from './utils/store'
import { motion } from "framer-motion"


function App() {
  
  const randomNum = Math.floor(Math.random() * (359 - 1))
  const variants = {
    rotate: { rotate: [0, 0, 720], transition: { repeat: 0, duration: 0.5 } },
    stop: { y: [0, 0, 0], transition: { repeat: Infinity, repeatDelay: 0 } }
  };
  const [rotate, setRotate] = useState(false)

  const handleSpin = () => {
    setRotate(!rotate);
  }

  useEffect(() => {
  }, [rotate])

  return (
    <div id="InputBox">
      <InputBox />
      <button id="spin-button" onClick={handleSpin}>spin</button>
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
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          // repeat: Infinity,
          // repeatDelay: 0
          }}>
          <PieChart/>
      </motion.div>
    </div>
  )
}

export default App




