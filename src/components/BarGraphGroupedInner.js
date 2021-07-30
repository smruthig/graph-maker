import {Bar} from 'react-chartjs-2'
import {useEffect, useState} from 'react'

const BarGraphGroupedInner = (props) => {
    
    var i=0;
    const bgcol =  [
        '#fcba03','#f54745','#f59527','#b6cc0c','#08a642','#37e6a3','#07f7cf','#0ba4bf','#09519e','#7436f7',
        '#b561fa','#db77f7','#f54df7','#f58ed8','#fa7db9','#f7436d','#fa141c'
    ]

    let datasets=[]
    for(var x=0;x<props.no_of_sets;x++)
    {
        let o = {}
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

    const [clickedDataset, setClickedDataset] = useState('');
    const [clickedElement, setClickedElement] = useState('');
    //clicked is used to check that prompt doesn't come after entering new data
    const [clicked, setClicked] = useState(0)
    //datasetInd is the index of which dataset it is
    const [datasetInd, setDatasetInd] = useState()
    //dataInd is the index of element number
    const [dataInd, setDataInd] = useState()
    
    const getElementAtEvent = element => {
        if (!element.length) return;
        else 
            setClicked(clicked+1)
        const { datasetIndex, index } = element[0];
        setDataInd(index)
        setClickedElement(`${data.labels[index]} - ${data.datasets[datasetIndex].data[index]}`);
    };

    const getDatasetAtEvent = dataset => {
        if (!dataset.length) return;
        const datasetIndex = dataset[0].datasetIndex;
        setDatasetInd(dataset[0].datasetIndex);
        setClickedDataset(data.datasets[datasetIndex].label);
    };

    useEffect(() => {
        if (clicked){
            let c = prompt(`Enter new value for ${clickedDataset}'s ${clickedElement.split('-')[0]}:`,clickedElement.split('-')[1])
            if (c===null)
                c = Number(clickedElement.split('-')[1])
            const arr = []
            for(var x=0;x<props.val.length;x++){
                console.log('props.val[x]',props.val[x])
                arr.push(props.val[x])
                if (x == datasetInd){
                    console.log('before: ',arr[x])
                    arr[x][dataInd] = Number(c)
                    console.log('after: ',arr[x])
                }
            }
            props.editVal(arr)
        }
    }, [clickedElement, clicked]);

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
                getElementAtEvent={getElementAtEvent}
                getDatasetAtEvent={getDatasetAtEvent}
            />
        </div>
    )
}

export default BarGraphGroupedInner
