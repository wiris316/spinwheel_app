import { useState } from 'react'
import './App.css'
import PieChart from './components/PieChart'
import ToDoBox from './components/ToDoBox'
import { motion } from "framer-motion"

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <ToDoBox/>
      <motion.div
        className="box"
        animate={{
        // scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 360, 360, 0],
        // borderRadius: ["0%", "0%", "50%", "50%", "0%"]
        }}
        transition={{
          duration: 2,
          // ease: "easeInOut",
          // times: [0, 0.2, 0.5, 0.8, 1],
          // repeat: Infinity,
          repeatDelay: 2
        }}>
      <PieChart/>
      </motion.div>
    </>
  )
}

export default App




