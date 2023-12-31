import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export const data = {
  // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  labels: ['AutoRikshaw', 'Plumber', 'Electrician', 'Carpenter', 'Cleaning', 'Mechanic'],
  datasets: [
    {
      label: 'No of Service Providers',
      data: [12, 19, 3, 5, 2, 3], 
      backgroundColor: [
          'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      // borderColor: [
      //   'rgba(255, 99, 132, 1)',
      //   'rgba(54, 162, 235, 1)',
      //   'rgba(255, 206, 86, 1)',
      //   'rgba(75, 192, 192, 1)',
      //   'rgba(153, 102, 255, 1)',
      //   'rgba(255, 159, 64, 1)',
      // ],
      // borderWidth: 1,
    },
  ],
};

// const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top',
//     },
//     title: {
//       display: true,
//       text: 'Occupations Distribution',
//     },
//   },
// };

export default function Piechart() {
  // return <Doughnut data={data} options={options}/>;
  return <Doughnut data={data}/>;
}
