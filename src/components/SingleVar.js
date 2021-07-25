import '../css/SingleVar.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {useRef} from 'react'
import {useHistory} from 'react-router-dom'


const SingleVar = ({singleVar}) => {

    const graph_title = singleVar[0];
    const set_graph_title = singleVar[1];
    const no_of_val = singleVar[2];
    const set_no_of_val = singleVar[3];
    const values = singleVar[4];
    const set_values = singleVar[5];
    const labels = singleVar[6];
    const set_labels = singleVar[7];

    const err_ref = useRef(null);
    const hist = useHistory();

    const submit_fn = () => {
        let arr_of_val = values.split(',')
        for (var i in arr_of_val)
            arr_of_val[i] = Number(arr_of_val[i])
        if (arr_of_val.length != no_of_val)
            err_ref.current.innerHTML = "Number of values doesn't match expected number"
        else {
            err_ref.current.innerHTML = ""
            hist.push('/piechart')
        }  
    }

    const clear_fn = () => {
        set_graph_title('');
        set_no_of_val('');
        set_values('');
        set_labels('');
        err_ref.current.innerHTML = ""
    }

    return (
        <div>
			<h6 style={{color:'white'}}>The following are generated: Pie chart, Doughnut, Radial chart</h6>
			<br/>
            <form>
                <Row>
                    <Col sm='12' md='6'>
                        <label htmlFor='graph_title'>Title:</label><br/>
                        <input 
                            name='graph_title' 
                            type='text'
                            placeholder='Enter the title' 
                            value={graph_title} 
                            onChange={(e)=>set_graph_title(e.target.value)}
                        />
                    </Col>
                
                    <Col sm='12' md='6'>
                        <label htmlFor='no_of_val'>Number of values:</label><br/>
                        <input 
                            name='no_of_val' 
                            type='text'
                            placeholder='Enter the number of values'
                            required
                            pattern='[0-9]{1,}' 
                            value={no_of_val} 
                            onChange={(e)=>set_no_of_val(e.target.value)}
                        />
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col lg={true}>
                    <label htmlFor="values">Values:</label><br/>
                    <input
                        name='values'
                        type='text'
                        placeholder='Enter comma separated values'
                        required
                        pattern='[0-9]{1,}(\s{0,1},\s{0,1}[0-9]{1,}){0,}'
                        value = {values}
                        onChange = {(e)=>set_values(e.target.value)}
                    />
                    <p className='err' ref={err_ref}></p>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col lg={true}>
                    <label htmlFor="labels">Labels:</label><br/>
                    <input
                        name='values'
                        type='text'
                        placeholder='Enter comma separated labels'
                        value = {labels}
                        onChange = {(e)=>set_labels(e.target.value)}
                    />
                    </Col>
                </Row>

                <br/>
                <Row> 
                    <Col> 
                        <Button variant='success' onClick={submit_fn}>Create</Button>
                    </Col>
                    <Col>
                        <Button variant='danger' onClick={clear_fn}>Clear</Button>
                    </Col>
                </Row>
            </form>
        </div>
    )
}

export default SingleVar
