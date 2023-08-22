import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from '../utils/store';
import '../assets/Instruction.scss'

const Instruction2 = () => {

  const instructions = '2. Click the center, "spin" button to begin spinning the wheel. Once you\'re ready for the wheel to stop, click the center, "stop" button.'

  return (
    <>
      <p> {instructions} </p>
    </>

  )
  
}

export default Instruction2