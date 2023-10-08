import {useContext} from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto'
import '../assets/Piechart.scss'
import { StoreContext } from '../utils/store.jsx'
import ChartDataLabels from 'chartjs-plugin-datalabels';


const PieChart = () => {
  
  const {parts, data} = useContext(StoreContext)
  
  const chartData={
    labels: data,
    datasets: [{
      data: parts,
      displacements: [0, 0, 40, 0, 0, 26],
      
      backgroundColor: [
        '#f39396',
        '#166a8f', // blueish slate
        '#acc236', //lime green
        '#75FAD2', //mint
        '#FBBDC8', //pink
        '#355070', //slate
        '#537bc4', //blueish purple
        '#4dc9f6', //icy blue
        // '#E56B6F', //orange-red
        // '#0AD3FF', //aqua blue
        // '#E1FAF9', //white
        // '#f67019', //orange
        // '#f53794', //hot pink
        // '#00a950', //green
        // '#58595b', //gray
        // '#8549ba' //purple
      ],
    borderWidth: 2
    }]
  }
  
  return (
    <>
      <Pie
        id="Pie"
        height="500%"
        options={{
          plugins: {
            tooltips: {
              enabled: false
            },
            datalabels: {
              formatter: ((value, context)=> {
                return chartData.labels[context.dataIndex]
              }),
              color: 'white',
              font: {
                size: '18px'
              },
              rotation: 45,
            },
            legend: {
              display: false
            }
          },
        }}
        data = {chartData}
        plugins={[ ChartDataLabels ]}
      />
    </>
  )
};

export default PieChart;

