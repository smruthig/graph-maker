import {Bar} from 'react-chartjs-2'

const BarGraphHorizontal = (props) => {
    let arr_of_val = props.values.split(',')
    let arr_of_labels = props.label.split(',')
    let title = props.title;

    if (props.title === '')
        title='Default title'
    for (var i in arr_of_val){
        arr_of_val[i] = Number(arr_of_val[i])
    }

    i = props.no_of_val-arr_of_labels.length
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
                <Bar
                    data={{
                        labels: arr_of_labels,
                        datasets: [{
                            axis:'y',
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
                                '#fa7db9',
                                '#f7436d',
                                '#fa141c'
                            ],
                            data: arr_of_val,
                        }]
                    }}
					height={400} 
                    width={400}
                    options={{
                        indexAxis:'y',
                        title:{
                            display: true,
                            text: title,
                            fontSize: 20
                        },
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

export default BarGraphHorizontal