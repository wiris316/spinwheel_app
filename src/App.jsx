import { useContext, useState, useEffect } from 'react'
import './App.css'
import PieChart from './components/PieChart'
import ToDoBox from './components/ToDoBox'
import { StoreContext } from './utils/store'
import { motion } from "framer-motion"


function App() {
  
  const randomNum = Math.floor(Math.random() * (359 - 1))
  

  return (
    <>
      <ToDoBox />
      <motion.div
          className="box"
          animate={{
          // scale: [1, 2, 2, 1, 1],
          // rotate: [0, 0, 180, 0, 0],
            rotate: [0, 0, 180 ]
          // borderRadius: ["0%", "0%", "50%", "50%", "0%"]
          }}
          transition={{
            // duration: 1,
            // ease: "easeInOut",
            // times: [0, 0.2, 0.5, 0.8, 1],
            // repeat: Infinity,
            // repeatDelay: 0
          }}>
          <PieChart/>
      </motion.div>
    </>
  )
}

export default App




