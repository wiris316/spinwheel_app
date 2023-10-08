import { useContext, useEffect } from 'react';
import PieChart from './PieChart'
import { StoreContext } from '../utils/store'
import '../assets/Animation.scss'
import { motion } from "framer-motion"


function Animation() {
  
  const { rotate, tempDegree, setTempDegree } = useContext(StoreContext)
  
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
      transition: { repeat: Infinity, duration: 0.75, ease: 'linear' },
    },
    stop: {
      rotate: tempDegree, 
      transition: {
        repeat: 0,
        ease: 'linear',
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
          rotate ? 'rotate' : 'stop'
        }
      >
          <PieChart/>
      </motion.div>
    </>
  )
}

export default Animation;