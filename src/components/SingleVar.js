import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {useState, useEffect, useRef} from 'react'

const SingleVar = () => {

    const[fields, setFields] = useState(0)
    const inp_ref = useRef(null);
    const[arr,setArr] = useState([])

    useEffect(() => {
        let a=[]
        let b=[]
        for(var i=0;i<fields;i++){
            if(i===0){
                a.push(<Form.Label className="form_label" key='label1'>X values</Form.Label>);
                a.push(<br key='br1'/>);
                b.push(<Form.Label className="form_label" key='label2'>Legend</Form.Label>);
                b.push(<br key='br2'/>);
            }
            a.push(<input type="text" key={i}/>)
            b.push(<input type="text" key={i+fields}/>)
        }
        setArr([...a,<br key='br3'/>,<br key='br4'/>,...b])
        //inp_ref.current.innerHTML+=i;
    }, [fields])

    return (
        <>
            <Form>
                <Row>
                    <Form.Group as={Col} className="mb-3" controlId="title">
                        <Form.Label className="form_label">Graph Title</Form.Label>
                        <Form.Control placeholder="Enter the title for pie chart" />
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="x_label">
                        <Form.Label className="form_label">Number of values</Form.Label>
                        <Form.Control placeholder="Enter the number of values" pattern='[0-9]{1,}' onChange={(e)=>setFields(e.target.value)}/>
                    </Form.Group>
                </Row>

                <div ref={inp_ref}>
                    {arr}
                </div>


                {/* <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label className="form_label">City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label className="form_label">State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label className="form_label">Zip</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Row> */}

                {/* <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check className="form_label" type="checkbox" label="Check me out" />
                </Form.Group> */}

                <br/><br/>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default SingleVar
