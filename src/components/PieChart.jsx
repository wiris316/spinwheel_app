import React, {useState, useContext, useEffect, useRef} from 'react';
import { Chart, Pie } from 'react-chartjs-2';
import 'chart.js/auto'
import Piechart from '../assets/Piechart.scss'
import { StoreContext } from '../utils/store.jsx'


const PieChart = () => {
  const { data, setData } = useContext(StoreContext)
  console.log('here', data)
  const ref = useRef(data);
  setData(data)

  useEffect(() => {
    // ref.current = data.push(1)
    console.log('in useeffect', data)
  })

  return (
    <>
      <Pie ref={ref} height="500%"
        options={{ maintainAspectRatio: false }}
        data={{
          // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
          // label: '# of Votes',
          data: data,
          // borderWidth: 1
          }]
    }} />
    </>
  )
};

export default PieChart;