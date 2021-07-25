import {Radar} from 'react-chartjs-2'

const data = {
    labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
    datasets: [
      {
        label: '# of Votes',
        data: [2, 9, 3, 5, 2, 3],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
      },
    ],
};
  
const options = {
    scale: {
      ticks: { beginAtZero: true },
    },
};

const RadarChart = () => {
    return (
        <div className='chart'>
            <Radar data={data} options={options} height={200} width = {200}/>
        </div>
    )
}

export default RadarChart
