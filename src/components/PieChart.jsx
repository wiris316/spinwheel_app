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
      <Pie
        height="500%"
        options={{
          plugins: {
            legend: {
              display: false
            }
          },
          maintainAspectRatio: false
        }}
        data={{
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          data: data,
          backgroundColor:[
            '#4dc9f6',
            '#f67019',
            '#f53794',
            '#537bc4',
            '#acc236',
            '#166a8f',
            '#00a950',
            '#58595b',
            '#8549ba'
          ]
        // label: '# of Votes',
        // borderWidth: 1
        }]
        }} />
    </>
  )
};

export default PieChart;