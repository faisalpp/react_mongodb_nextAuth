import React from 'react'
import {Chart as ChartJs} from "chart.js/auto"
import {Bar} from 'react-chartjs-2'

const Chart = ({data}) => {
  var data = {
    labels: ['Mon','Teu','Wed','Thur','Fri','Sat','Sun'],
    datasets: [{
      label: 'All Views',
      data: [12,18,5,2,3,14,17],
      backgroundColor: [
        'rgba(51, 102, 204,0.8)'
      ]
    }], 
  }
  var options = {
    maintainAspectRation: false,
    responsive: true,
    scales:{
      x: {
        grid: {display: false}
      },
      y: {
        grid: {display: false},
        beginAtZero: true
      }
    },
    legend:{
      labels: {
        fontSize: 20
      }
    }
  }

   return (
    <> 
    <div className='w-fit'><Bar data={data} options={options}/></div>
    </>
  )
}

export default Chart