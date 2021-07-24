import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const DataForm = () => {
    return (
        <div>
            <div className="dataForm">
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className="form_label">Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label className="form_label">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label className="form_label">Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label className="form_label">Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
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
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check className="form_label" type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default DataForm
