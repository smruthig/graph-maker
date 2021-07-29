import {useState} from 'react';
import Button from 'react-bootstrap/Button'
import Modal_SingleVar from './Modal_SingleVar'

const BarGraphGrouped = () => {

    //for modal
    const [fullscreen, setFullscreen] = useState(true);
    const set_Fullscreen = (str) => setFullscreen(str)
    const [show, setShow] = useState(false);
    const set_Show = (str) => setShow(str)
    //for modal
    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    //for data
    const [no_of_sets, setNo_of_sets] = useState(0)
    const set_no_of_sets = (no_of_sets) => setNo_of_sets(no_of_sets + 1)
    const [no_of_val, setNo_of_val] = useState('')
    const set_no_of_val = (n) => setNo_of_val(n)
    const [val, setVal] = useState([])
    const set_val = (arr) => setVal([...val, arr])
    const [label, setLabel] = useState([])
    const set_label = (arr) => setLabel([...label, arr])
    const [title, setTitle] = useState('')
    const set_title = (t) => setTitle(t)


    return (
        <div className='chart'>
            { 
                no_of_sets ?
                    <>
                    </>
                :
                <center>
                    <br/>
                    <h2>No data to display</h2>
                </center> 
            }
            <center>
                <br/>
                <Button 
                    variant='success' 
                    className="me-2" 
                    onClick={() => handleShow('sm-down')}>
                        Add data
                </Button>
                <Modal_SingleVar 
                    show={show}  
                    setShow={set_Show} 
                    fullscreen={fullscreen} 

                    setNo_of_sets={set_no_of_sets}
                    no_of_val = {no_of_val}
                    setNo_of_val = {set_no_of_val}
                    val = {val}
                    setVal = {set_val}
                    label = {label}
                    setLabel = {set_label}
                    title={title}
                    setTitle = {set_title}
                />
            </center>
        </div>
    )
}

export default BarGraphGrouped
