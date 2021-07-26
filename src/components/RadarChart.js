import {Radar} from 'react-chartjs-2'


const RadarChart = (props) => {

  let arr_of_val = props.values.split(',')
    let arr_of_labels = props.label.split(',')
    let title = props.title;

    if (props.title === '')
        title='Default title'
    for (var i in arr_of_val){
        arr_of_val[i] = Number(arr_of_val[i])
    }
    
    var i = props.no_of_val-arr_of_labels.length
    if (i){
        if(props.label === ''){
            arr_of_labels.shift();
            i+=1;
        }
        for(let x=0;x<i;x++)
            arr_of_labels.push(`Default ${x}`)
    }

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
