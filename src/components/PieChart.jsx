import React, {useState, useContext, useEffect, useRef} from 'react';
import { Pie, getElementsAtEvent } from 'react-chartjs-2';
import 'chart.js/auto'
import '../assets/Piechart.scss'
import { StoreContext } from '../utils/store.jsx'
import ResultBox from './ResultBox'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  ArcElement, 
  Tooltip,
  Legend
)

const PieChart = () => {
  
  const {parts, data, arrowClick} = useContext(StoreContext)
  const [spun, setSpun] = useState(false)

  
  const chartData={
    labels: data,
    datasets: [{
      data: parts,
      // label:"slices",
      backgroundColor: [
        '#75FAD2',
        '#FBBDC8',
        '#0AD3FF',
        '#166a8f', //slate
        '#537bc4', //blueish purple
        // '#355070',
        // '#E56B6F',
        // '#E1FAF9',
        // '#4dc9f6', //aqua blue
        // '#f67019', //orange
        // '#f53794', //hot pink
        // '#acc236', //lime green
        // '#00a950', //green
        // '#58595b', //gray
        // '#8549ba' //purple
      ]
    // label: '# of Votes',
    // borderWidth: 1
    }]
  }

  // const options = {

  // }

  const chartRef = useRef();
  const onClick = (event) => {
    
    if (getElementsAtEvent(chartRef.current, event).length > 0) {
      console.log('arceleement', getElementsAtEvent(chartRef.current, event))
      const datasetIndexNum = getElementsAtEvent(chartRef.current, event)[0].datasetIndex
      const dataPoint = getElementsAtEvent(chartRef.current, event)[0].index
      
      console.log('datasetIndexNum', datasetIndexNum)
      console.log('dataPoint', dataPoint)
      console.log('which animal', chartData.labels[dataPoint])
    }
  }

  // useEffect(() => {    
  // }, [parts, data])

  return (
    <>
      <Pie
        height="500%"
        options={{
          responsive:true,
          plugins: {
            datalabels: {
              // color: 'white',
              formatter: ((context, args)=> {
                // return context.chart.data.labels[context.dataIndex];
                const index = args.dataIndex;
                return args.chart.data.labels[index];
                // console.log('context hurrr', args)
              }),
              // display: 'auto',
            },
            legend: {
              display: false
            }
          },
          maintainAspectRatio: false
        }}
        data = {chartData}
        onClick={onClick}
        ref = {chartRef}
        plugins={{ ChartDataLabels }}
      />
      {/* > */}
        {/* data = { datas }
        options = { options } */}
      {/* </Pie> */}
      
    </>
  )
};

export default PieChart;