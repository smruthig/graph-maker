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
                            <NavDropdown title="PieChart" id="collasible-nav-dropdown">
                                <LinkContainer exact to='/piechart'>
                                    <NavDropdown.Item>PieChart</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer exact to='/doughnut'>
                                    <NavDropdown.Item>Doughnut</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer exact to='/polarchart'>
                                    <NavDropdown.Item>PolarChart</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                            <LinkContainer exact to='/radar'>
                                <Nav.Link>Radar</Nav.Link>
                            </LinkContainer>
                            <NavDropdown title="Bar Graph" id="collasible-nav-dropdown">
                                <LinkContainer exact to='/bargraph/vertical'>
                                    <NavDropdown.Item>Vertical</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer exact to='/bargraph/horizontal'>
                                    <NavDropdown.Item>Horizontal</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider />
                                <LinkContainer exact to='/bargraph/grouped'>
                                    <NavDropdown.Item>Grouped</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                            <LinkContainer to='/linechart'>
                                <Nav.Link>LineChart</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/scatterplot'>
                                <Nav.Link>ScatterPlot</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav>
                            {/* <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#contact">Contact Us</Nav.Link> */}
                            {/* <LinkContainer to='#'>
                                <Nav.Link>Animations</Nav.Link>
                            </LinkContainer> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
