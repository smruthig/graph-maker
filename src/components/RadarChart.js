import {Radar} from 'react-chartjs-2'


const RadarChart = (props) => {

  let arr_of_val = props.values.split(',')
    let arr_of_labels = props.label.split(',')
    let title = props.title;
    let default_labels = [];

    if (props.title === '')
        title='Default title'
    for (var i in arr_of_val){
        arr_of_val[i] = Number(arr_of_val[i])
        default_labels[i] = 'Default label '+i
    }
    if (props.label === '')
        arr_of_labels = default_labels;

    const data = {
      labels: arr_of_labels,
      datasets: [
        {
          label: title,
          data: arr_of_val,
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

    return (
        <div className='chart'>
            {props.no_of_val>0 ?
              <Radar 
                data={data} 
                height = {100} 
                width = {100}
                options={options} 
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

export default RadarChart
