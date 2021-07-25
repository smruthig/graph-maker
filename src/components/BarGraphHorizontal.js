import {Bar} from 'react-chartjs-2'
import '../css/Chart.css'

const BarGraphHorizontal = () => {
    let arr_of_val = [2,3,5,7,5,2,7,4]
    let arr_of_labels = ['a','dd','ff','ss','gg','ee','qq','hh']
    let title='title'

    return (
        <div className='chart'>
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
        </div>
    )
}

export default BarGraphHorizontal