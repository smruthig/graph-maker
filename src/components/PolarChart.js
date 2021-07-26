import {PolarArea} from 'react-chartjs-2'

const PolarChart = (props) => {
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
                <PolarArea
                    data={{
                        labels: arr_of_labels,
                        datasets: [{
                            label: title,
                            backgroundColor: [
                                '#fcba03',
                                '#f54745',
                                '#f59527',
                                '#b6cc0c',
                                '#08a642',
                                '#37e6a3',
                                '#07f7cf',
                                '#0ba4bf',
                                '#09519e',
                                '#7436f7',
                                '#b561fa',
                                '#db77f7',
                                '#f54df7',
                                '#f58ed8',
                                '#f7436d',
                            ],
                            data: arr_of_val,
                            hoverOffset: 4
                        }]
                    }}
					height={400} 
                    width={400}
                    options={{
                        title:{
                            display: true,
                            text: title
                        },
                        legend:{
                            display: true,
                            position:'right',
                            align: 'right'
                        },
                        radius:'100%',
						maintainAspectRatio: false,
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

export default PolarChart
