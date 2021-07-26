import {Bar} from 'react-chartjs-2'
import '../css/Chart.css'

const BarGraphVertical = ({label, title, values, no_of_val}) => {
    let arr_of_val = values.split(',')
    let arr_of_labels = label.split(',')
    for (var i in arr_of_val)
        arr_of_val[i] = Number(arr_of_val[i])

    return (
        <div className='chart'>
            {no_of_val>0 ?
                <Bar
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

export default BarGraphVertical