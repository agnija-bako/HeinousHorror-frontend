import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import NavDropdown from 'react-bootstrap/NavDropdown'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'

function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Heinous Horror</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <NavDropdown title="Games" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Top</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Explore</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Upcoming</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Movies" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Top</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Explore</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Upcoming</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Navigation