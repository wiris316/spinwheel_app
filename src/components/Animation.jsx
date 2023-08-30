import { useContext, useState, useEffect } from 'react';
import PieChart from './PieChart'
import InputBox from './InputBox'
import { StoreContext } from '../utils/store'
import '../assets/Animation.scss'
import { motion } from "framer-motion"


function Animation() {
  
  const { rotate, setRotate, spinButton, setSpinButton, result, setResult, tempDegree, setTempDegree } = useContext(StoreContext)


  
  let attributes = document.getElementById('Animation')

  const captureDegree = () => {
    if (attributes !== null) {
      let rotationDegree = attributes.getAttribute('style')
      let degree = rotationDegree.split(' ')[1]
      degree = degree.replace(/[^0-9.]/gi,'')
      return degree
    }
  }

  const variants = {
    rotate: {
      rotate: [0, 360],
      // scale: [1,1.5,tempDegree],
      transition: { repeat: Infinity, duration: 0.75, ease: 'linear' },
      // x: {duration: 1},
      // times: [5, 5, 0.5, 300, 80]// Adjust duration for smoother animation
    },
    stop: {
      rotate: tempDegree, 
      transition: {
        repeat: 0,
        ease: 'linear',
        // scale: 1,
      }, 
    }
  };


  useEffect(() => {
    let rotationDegree = Math.floor(captureDegree())
    setTempDegree(rotationDegree)
    
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
      >
          <PieChart/>
      </motion.div>
    </>
  )
}

export default Animation;