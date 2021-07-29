import {Bar} from 'react-chartjs-2'

const BarGraphGroupedInner = (props) => {
    
    var i=0;
    const bgcol =  [
        '#fcba03','#f54745','#f59527','#b6cc0c','#08a642','#37e6a3','#07f7cf','#0ba4bf','#09519e','#7436f7',
        '#b561fa','#db77f7','#f54df7','#f58ed8','#fa7db9','#f7436d','#fa141c'
    ]

    let datasets = []
    for(var x=0;x<props.no_of_sets;x++)
    {
        let o = new Object()
        o.label = props.data_title[i]
        o.data = props.val[i]
        o.backgroundColor = bgcol[i]
        i++
        datasets.push(o)
    }

    const data={
        labels: props.label,
        datasets: datasets
    }

    return (
        <div>
            <Bar
                data={data}
                height={400} 
                width={400}
                options={{
                    title:{
                        display: true,
                        text: props.title,
                        fontSize: 20
                    },
					maintainAspectRatio: false,
                }}
            />
        </div>
    )
}

export default BarGraphGroupedInner
