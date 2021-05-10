import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'

function Navigation() {
    return (
        <Navbar expand="lg" style={{ backgroundColor: "black" }}>
            <Navbar.Brand href="#home" className="logo dead-dude" style={{ color: "#d90128", fontSize: "50px" }}>HH</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home" className="text-white subtitle">Home</Nav.Link>
                    <NavDropdown title={<span className="text-white my-auto subtitle">Games</span>} id="basic-nav-dropdown" >
                        <NavDropdown.Item href="#action/3.1">Top</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Explore</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Upcoming</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title={<span className="text-white my-auto subtitle">Movies</span>} id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Top</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Explore</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Upcoming</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Navigation