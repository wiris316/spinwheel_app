// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <p>hi</p>
//     </>
//   )
// }

// export default App



import React from 'react';
import Chart from 'chart.js/auto';
import { motion } from "framer-motion"


const PieChart = () => {
  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  // const config = {
  //   type: 'pie',
  //   data: data,
  // };

  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

//   const x = useMotionValue(0)
// const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])

  return (
    <>
    <motion.div
      className="rotating-component"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 1 }}
    >
      <ctx/>
      <div style={{ width: '100px', height: '100px', backgroundColor: 'blue' }} />
    </motion.div>
    </>
  )
};

export default PieChart;
