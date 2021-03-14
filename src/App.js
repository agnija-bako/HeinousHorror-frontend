import React from "react"
import Popular from "./Movies/Popular"
import Navigation from "./Constants/Navigation"
import { Container, Row } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Navigation />
      <Container>

        <Row>

          <Popular />

        </Row>
      </Container>
    </div>
  )

}

export default App