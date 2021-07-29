import {useState} from 'react';
import Button from 'react-bootstrap/Button'
import Modal_SingleVar from './Modal_SingleVar'
import BarGraphGroupedInner from './BarGraphGroupedInner'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap';

const BarGraphGrouped = (props) => {

    //for modal
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const set_Show = (str) => setShow(str)
    //for modal
    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }


    return (
        <div className='chart'>
            { 
                props.mv_no_of_sets ?
                    <>
                        <BarGraphGroupedInner
                            no_of_sets={props.mv_no_of_sets}
                            no_of_val={props.mv_no_of_val}
                            val={props.mv_val}
                            label={props.mv_label}
                            title={props.mv_title}
                            data_title={props.mv_data_title}
                        />
                    </>
                :
                <center>
                    <br/>
                    <h2>No data to display</h2>
                </center> 
            }
            <br/>

            <Container> 
                <Row className="justify-content-md-center"> 
                    <Col> 
                        <Button variant='success' onClick={() => handleShow('sm-down')}>Add data</Button>                    
                    </Col>
                    <Col>
                        <Button type='button' variant='danger' onClick={props.clearall}>Clear</Button>
                    </Col>
                </Row>
            </Container>

            <center>
                <Modal_SingleVar 
                    show={show}  
                    setShow={set_Show} 
                    fullscreen={fullscreen} 

                    setNo_of_sets={props.mv_set_no_of_sets}
                    no_of_val = {props.mv_no_of_val}
                    setNo_of_val = {props.mv_set_no_of_val}
                    val = {props.mv_val}
                    setVal = {props.mv_set_val}
                    label = {props.mv_label}
                    setLabel = {props.mv_set_label}
                    title={props.mv_title}
                    setTitle = {props.mv_set_title}
                    data_title={props.mv_data_title}
                    setData_title={props.mv_set_data_title}
                />
            </center>
        </div>
    )
}

export default BarGraphGrouped
