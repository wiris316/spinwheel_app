import { useContext, useState, useEffect } from 'react';
import PieChart from './PieChart'
import InputBox from './InputBox'
import { StoreContext } from '../utils/store'
import '../assets/Animation.scss'
import { motion } from "framer-motion"


function Animation() {
  
  const { rotate, setRotate, spinButton, setSpinButton } = useContext(StoreContext)
  const [tempDegree,setTempDegree] = useState(0)

  const randomNum = Math.floor(Math.random() * (360)+1)
  
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
      transition: { repeat: Infinity, duration: 0.8, ease: 'linear' },
      // times: [5, 5, 0.5, 80, 80]// Adjust duration for smoother animation
    },
    stop: {
      rotate: tempDegree, 
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
    let rotationDegree = captureDegree()
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