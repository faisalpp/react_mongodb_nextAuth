import React from 'react'
import {Pie} from 'react-chartjs-2'

const PiChart = () => {
    const data = {
        labels: [
          'Desktop',
          'Mobile',
        ],
        datasets: [{
          label: 'Views',
          data: [25,75],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
          ],
          hoverOffset: 4
        }],
        
      };

    const options = {
       responsive: true,
    }  
    
   return (
    <div className='w-16'> 
    <Pie data={data} options={options}/>
    </div>
  )
}

export default PiChart