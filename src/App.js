import React from "react"
import Popular from "./Movies/Popular"
import Navigation from "./Constants/Navigation"
import { Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./Header"

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Container>
        <Popular />
      </Container>
    </div>
  )

}

export default App