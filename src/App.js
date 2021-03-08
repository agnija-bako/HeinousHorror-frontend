import React from "react"
import Popular from "./Movies/Popular"
import { Container, Row } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Container>
      <Row>
        <Popular />
      </Row>
    </Container>
  )

}

export default App