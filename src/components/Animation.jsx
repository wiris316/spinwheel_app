import { useContext, useState, useEffect } from 'react';
import PieChart from './PieChart'
import InputBox from './InputBox'
import { StoreContext } from '../utils/store'
import '../assets/Animation.scss'
import { motion } from "framer-motion"


function Animation() {
  
  const { rotate, setRotate, spinButton, setSpinButton } = useContext(StoreContext)
  
  const randomNum = Math.floor(Math.random() * (360))

  const variants = {
    rotate: {
      rotate: [0, 360],
      transition: { repeat: Infinity, duration: 1, ease: 'linear' }, // Adjust duration for smoother animation
    },
    stop: {
      rotate: randomNum, 
      transition: {
        repeat: 0,
        ease: 'linear'
      }
    }
  };

  // const handleSpin = () => {
  //   // let newRotate = !rotate
  //   setRotate(!rotate);
  //   spinButton === 'spin' ? setSpinButton('stop') : setSpinButton('spin')
  // }

  useEffect(() => {
  }, [rotate])

  return (
    <>
      <motion.div
        id="Animation"
        variants ={variants}
        animate={
          // scale: [1, 2, 2, 1, 1],
          // rotate: [0, 0, 180, 0, 0],
          rotate ? 'rotate' : 'stop'
          // borderRadius: ["0%", "0%", "50%", "50%", "0%"]
          }
        // transition={{
        //   duration: 2,
        //   ease: "linear",
        //   // repeat: Infinity, 
        //   delay: 1,
        //   // times: [0, 0.2, 0.5, 0.8, 1],
        //   // repeat: Infinity,
        //   // repeatDelay: 0
      //   }}
      >
          <PieChart/>
      </motion.div>
    </>
  )
}

export default Animation;