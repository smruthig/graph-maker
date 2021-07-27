import { Scatter } from 'react-chartjs-2';

const ScatterPlot = (props) => {

  let val_x = props.values_x.split(',')
  let val_y = props.values_y.split(',')
  let title = props.title;
  let data = [];

  if (props.title === '')
    title='Default title'

  for (var i in val_x){
    val_x[i] = Number(val_x[i])
    val_y[i] = Number(val_y[i])
    data.push({x: val_x[i], y: val_y[i]})
  }

  return (
    <div className='chart'>
      {props.no_of_val ? 
        <Scatter 
          data={{
            datasets: [
              {
                label: title,
                data: data,
                backgroundColor: 'rgba(255, 99, 132, 1)',
              },
            ],
          }}
          options={{
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
        :
        <center>
          <br/>
          <h2>No data to display</h2>
        </center>
      }
    </div>
  )
}

export default ScatterPlot