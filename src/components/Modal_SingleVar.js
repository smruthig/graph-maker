import '../css/Modal.css'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {useRef, useState} from 'react'

const Modal_SingleVar = (props) => {

    const err_ref = useRef(null);
    const [curr_val, setCurr_val] = useState('')
    const [curr_label, setCurr_label] = useState('')

    const clear_fn = (event) => {
        event.preventDefault();
        props.setTitle('');
        props.setNo_of_val('');
        props.setVal('');
        setCurr_val('');
        props.setLabel('');
        setCurr_label('');
        err_ref.current.innerHTML = ""
    }

    const submit_fn = (event) => {
        event.preventDefault()
        let arr_of_val = curr_val.split(',')
        for (var i in arr_of_val)
            arr_of_val[i] = Number(arr_of_val[i])
        if (arr_of_val.length != props.no_of_val)
            err_ref.current.innerHTML = "Number of values doesn't match expected number"
        else {
            err_ref.current.innerHTML = ""
            props.setNo_of_sets()
            props.setShow(false)
        }  
    }

    return (
        <div>
            <Modal show={props.show} fullscreen={props.fullscreen} onHide={() => props.setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add dataset</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={submit_fn}>
                        <Row>
                            <Col sm='12' md='6'>
                                <label className='modal_label' htmlFor='graph_title'>Title:</label><br/>
                                <input 
                                    name='graph_title'
                                    className='modal_inp' 
                                    type='text'
                                    placeholder='Enter the title' 
                                    value={props.title} 
                                    onChange={(e)=>props.setTitle(e.target.value)}
                                />
                            </Col>
                        
                            <Col sm='12' md='6'>
                                <label className='modal_label' htmlFor='no_of_val'>Number of values:</label><br/>
                                <input 
                                    name='no_of_val' 
                                    className='modal_inp'
                                    type='text'
                                    placeholder='Enter the number of values'
                                    required
                                    pattern='[0-9]{1,}' 
                                    value={props.no_of_val} 
                                    onChange={(e)=>props.setNo_of_val(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col lg={true}>
                            <label className='modal_label' htmlFor="values">Values:</label><br/>
                            <input
                                name='values'
                                className='modal_inp'
                                type='text'
                                placeholder='Enter comma separated values'
                                required
                                pattern='[0-9]{1,}(\s{0,1},\s{0,1}[0-9]{1,}){0,}'
                                value = {curr_val}
                                onChange = {(e)=>{
                                    setCurr_val(e.target.value)
                                    props.setVal(e.target.value)
                                }}
                            />
                            <p className='err' ref={err_ref}></p>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={true}>
                            <label className='modal_label' htmlFor="labels">Labels:</label><br/>
                            <input
                                name='values'
                                className='modal_inp'
                                type='text'
                                placeholder='Enter comma separated labels'
                                value = {curr_label}
                                onChange = {(e)=>{
                                    setCurr_label(e.target.value)
                                    props.setLabel(e.target.value)
                                }}
                            />
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
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Modal_SingleVar
