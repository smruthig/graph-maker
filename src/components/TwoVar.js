import '../css/SingleVar.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {useRef} from 'react'
import {useHistory} from 'react-router-dom'


const TwoVar = ({twoVar, setLastUpdated}) => {

    const graph_title = twoVar[0];
    const set_graph_title = twoVar[1];
    const no_of_val = twoVar[2];
    const set_no_of_val = twoVar[3];
    const values_x = twoVar[4];
    const set_values_x = twoVar[5];
    const values_y = twoVar[6];
    const set_values_y = twoVar[7];
    const errx_ref = useRef(null);
    const erry_ref = useRef(null);
    const hist = useHistory();

    const submit_fn = (event) => {
        event.preventDefault()
        let val_x = values_x.split(',')
        let val_y = values_y.split(',')
        for (var i in val_x){
            val_x[i] = Number(val_x[i])
        }
        for (i in val_y){
            val_y[i] = Number(val_y[i])
        }
        if (val_x.length != no_of_val)
            errx_ref.current.innerHTML = "Number of values doesn't match expected number"
        else if (val_y.length != no_of_val)
            erry_ref.current.innerHTML = "Number of values doesn't match expected number"
        else {
            setLastUpdated('twoVar')
            errx_ref.current.innerHTML = ""
            erry_ref.current.innerHTML = ""
            hist.push('/scatterplot')
        }  
    }

    const clear_fn = (event) => {
        event.preventDefault();
        set_graph_title('');
        set_no_of_val('');
        set_values_x('');
        set_values_y('');
        errx_ref.current.innerHTML = ""
        erry_ref.current.innerHTML = ""
    }

    return (
        <div>
			<h6 style={{color:'white'}}>Charts generated: Line chart, Scatter Plot</h6>
			<br/>
            <form onSubmit={submit_fn}>
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
                    <label htmlFor="values_x">X values:</label><br/>
                    <input
                        name='values_x'
                        type='text'
                        placeholder='Enter comma separated X values'
                        required
                        pattern='[0-9]{1,}(\s{0,1},\s{0,1}[0-9]{1,}){0,}'
                        value = {values_x}
                        onChange = {(e)=>set_values_x(e.target.value)}
                    />
                    <p className='err' ref={errx_ref}></p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={true}>
                    <label htmlFor="values_y">Y values:</label><br/>
                    <input
                        name='values_y'
                        type='text'
                        placeholder='Enter comma separated Y values'
                        required
                        pattern='[0-9]{1,}(\s{0,1},\s{0,1}[0-9]{1,}){0,}'
                        value = {values_y}
                        onChange = {(e)=>set_values_y(e.target.value)}
                    />
                    <p className='err' ref={erry_ref}></p>
                    </Col>
                </Row>

                <br/>
                <Row> 
                    <Col> 
                        <Button type='submit' variant='success'>Create</Button>
                    </Col>
                    <Col>
                        <Button type='button' variant='danger' onClick={clear_fn}>Clear</Button>
                    </Col>
                </Row>
            </form>
        </div>
    )
}

export default TwoVar

