import { Line } from 'react-chartjs-2';


const LineChart = (props) => {
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

    return (
        <div className='chart'>
            {props.no_of_val>0 ?
                <Line
                    data={{
                        labels: arr_of_labels,
                        datasets: [{
                            label: title,
                            backgroundColor: 'rgb(255, 99, 132)',
                            borderColor: 'rgba(255, 99, 132, 0.5)',
                            data: arr_of_val,
                        }]
                    }}
					height={400} 
                    width={400}
                    options={{
                        title:{
                            display: true,
                            text: title,
                            fontSize: 20
                        },
                        maintainAspectRatio: false,
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


export default LineChart