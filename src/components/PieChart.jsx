import React, {useState, useRef} from 'react';
import { Chart, Pie } from 'react-chartjs-2';
import 'chart.js/auto'
import Piechart from '../assets/Piechart.scss'


const PieChart = () => {
  // const ref = useRef();
  const [data, setData] = useState([1])

  return (
    <>
      <Pie data={{
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