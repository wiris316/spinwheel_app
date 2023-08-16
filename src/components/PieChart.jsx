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
  
  const {parts, data, result, setResult} = useContext(StoreContext)
  const [spun, setSpun] = useState(false)


  console.log('cchartdatalabels', ChartDataLabels.defaults)
  // ChartDataLabels.defaults.rotation = '25'
  ChartDataLabels.defaults.align = 'end'
  ChartDataLabels.defaults.clamp = true
  ChartDataLabels.defaults.offset = 0
  // ChartDataLabels.defaults.orientation = 'vertical'
  // ChartDataLabels.defaults.anchor = 'beginning'


  
  const chartData={
    labels: ['cat','dog','mouse','bird','rabbit'],
    datasets: [{
      data: [1,1,1,1,1],
      // label:"slices",
      
      backgroundColor: [
        // '#75FAD2', //mint
        // '#FBBDC8', //pink
        // '#0AD3FF', //aqua blue
        '#acc236', //lime green
        '#166a8f', // blueish slate
        '#355070', //slate
        '#537bc4', //blueish purple
        '#E56B6F', //orange-red
        // '#E1FAF9', //white
        '#4dc9f6', //icy blue
        // '#f67019', //orange
        // '#f53794', //hot pink
        // '#00a950', //green
        // '#58595b', //gray
        // '#8549ba' //purple
      ]
    // label: '# of Votes',
    // borderWidth: 1
    }]
  }


  const chartRef = useRef();
  const onClick = (event) => {

    if (chartRef.current !== undefined) {
      // console.log('this is the event', event)
      // console.log('chartRef.current', chartRef.current.tooltip.title[0])
      // console.log('result here',chartRef.current.tooltip.title[0])
      setResult(chartRef.current.tooltip.title[0])


      const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    
      const pixelX = (50/ 100) * viewportWidth;
      const pixelY = (30/ 100) * viewportHeight;
      console.log(pixelX, pixelY)
    
      document.elementFromPoint(pixelX, pixelY).click()

    }
    if (getElementsAtEvent(chartRef.current, event).length > 0) {
      console.log('arceleement', getElementsAtEvent(chartRef.current, event))
      const datasetIndexNum = getElementsAtEvent(chartRef.current, event)[0].datasetIndex
      const dataPoint = getElementsAtEvent(chartRef.current, event)[0].index
      
      // console.log('datasetIndexNum', datasetIndexNum)
      // console.log('dataPoint', dataPoint)
      setResult(chartData.labels[dataPoint])
      console.log('which animal', chartData.labels[dataPoint])
    }
    console.log('slicecliccked')
    // console.log(getElementsAtEvent(chartRef.current, event))
  }
  

  return (
    <>
      <Pie
        id="Pie"
        height="500%"
        options={{
          plugins: {
            datalabels: {
              formatter: ((value, context)=> {
                // return context.chart.data.labels[context.dataIndex];
                // const index = args.dataIndex;
                return chartData.labels[context.dataIndex]
                // return args.chart.data.labels[index];
                // console.log('context hurrr', args)
              }),
              // display: 'auto',
              color: 'white',
              font: {
                size: '25px'
              },
            },
            legend: {
              display: false
            }
          },
          // maintainAspectRatio: false
        }}
        data = {chartData}
        onClick={onClick}
        ref = {chartRef}
        plugins={[ ChartDataLabels ]}
      />
      
    </>
  )
};

export default PieChart;

