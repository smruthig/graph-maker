import {Pie} from 'react-chartjs-2'

const PieChart = ({label, title, values, no_of_vals}) => {
    let arr_of_val = values.split(',')
    let arr_of_labels = label.split(',')
    for (var i in arr_of_val)
        arr_of_val[i] = Number(arr_of_val[i])

    return (
        <div>
            {no_of_vals ? 
                <Pie
                    data={{
                        labels: arr_of_labels,
                        datasets: [{
                            label: title,
                            backgroundColor: [
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(255, 205, 86)'
                            ],
                            data: arr_of_val,
                            hoverOffset: 4
                        }]
                    }}
                    options={{
                        radius:'50%'
                    }}
            />
             :
            <center>
                <br/><br/>
                <h2 style={{color:'white'}}>No data to display</h2>
            </center>
            }
        </div>
    )
}

export default PieChart
