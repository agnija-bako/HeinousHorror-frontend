import React from "react"
import Movies from "./Movies/Movies"
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
        <Movies />
      </Container>
    </div>
  )

}

export default App