import React, {useState, useContext, useEffect} from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto'
import Piechart from '../assets/Piechart.scss'
import { StoreContext } from '../utils/store.jsx'


const PieChart = () => {
  
  const {data} = useContext(StoreContext)

  useEffect(() => {    
  }, [data])

  return (
    <>
      <Pie  height="500%"
        options={{ maintainAspectRatio: false }}
        data={{
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
        data: data,
        // label: '# of Votes',
        // borderWidth: 1
        }]
        }} />
    </>
  )
};

export default PieChart;