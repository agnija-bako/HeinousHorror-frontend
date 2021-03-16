import React from "react"
import Popular from "./Movies/Popular"
import Navigation from "./Constants/Navigation"
import { Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Navigation />
      <Container>
        <Popular />
      </Container>
    </div>
  )

}

export default App