import React from "react"
import Movies from "./Movies/Movies"
import Navigation from "./Constants/Navigation"
import { Container, Row, Col } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./Header"
import Games from "./Games/Games"


function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Container fluid>
        <Row >
          <Col lg="11" className="mx-5">
        <Movies />
        <Games/>
        </Col>
        </Row>
      </Container>
    </div>
  )

}

export default App