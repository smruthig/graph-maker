import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import {LinkContainer} from 'react-router-bootstrap' 

const Header = () => {
    return (
        <div>
            <Navbar className="nav" collapseOnSelect expand="lg" bg='dark' variant="dark">
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>GraphMaker</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer exact to='/'>
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/piechart'>
                                <Nav.Link>PieChart</Nav.Link>
                            </LinkContainer>
                            <NavDropdown title="Bar Graph" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#bargraph/vertical">Vertical</NavDropdown.Item>
                                <NavDropdown.Item href="#bargraph/horizontal">Horizontal</NavDropdown.Item>
                                <NavDropdown.Item href="#bargraph/grouped">Grouped</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#bargraph/all">View All</NavDropdown.Item>
                            </NavDropdown>
                            <LinkContainer to='/linechart'>
                                <Nav.Link>LineChart</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#contact">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
