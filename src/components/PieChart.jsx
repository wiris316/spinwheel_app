import React, {useState, useContext, useEffect} from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto'
import Piechart from '../assets/Piechart.scss'
import { StoreContext } from '../utils/store.jsx'


const PieChart = () => {
  
  const {parts} = useContext(StoreContext)
  const {data} = useContext(StoreContext)

  useEffect(() => {    
  }, [parts, data])

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
        labels: data,
        datasets: [{
          data: parts,
          backgroundColor: [
            // '#355070',
            '#75FAD2',
            // '#E56B6F',
            // '#E1FAF9',
            '#FBBDC8',
            '#0AD3FF'
            // '#4dc9f6', //aqua blue
            // '#f67019', //orange
            // '#f53794', //hot pink
            // '#537bc4', //blueish purple
            // '#acc236', //lime green
            // '#166a8f', //slate
            // '#00a950', //green
            // '#58595b', //gray
            // '#8549ba' //purple
          ]
        // label: '# of Votes',
        // borderWidth: 1
        }]
        }} />
    </>
  )
};

export default PieChart;