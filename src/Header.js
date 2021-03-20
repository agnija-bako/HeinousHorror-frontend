import React from "react"
import { Jumbotron } from "react-bootstrap"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Header() {
    //const background = { backgroundSize: 'cover' };
    return (
        <div style={{ width: 'auto' }}>
            <Jumbotron style={{ backgroundImage: `url('static/images/door.jpg')`, backgroundSize: 'cover', height: '700px' }} fluid>
                <h2 className="text-white subtitle text-center mt-5 pt-5">Entertainment</h2>
                <h1 className="title display-1 text-center" style={{ color: "#d90128" }}>Heinous Horror</h1>
                <h2 className="text-white subtitle text-center text-uppercase">For true horror fans</h2>
            </Jumbotron>
        </div>
    );


}
export default Header