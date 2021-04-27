import React from "react"
import { Container, Jumbotron } from "react-bootstrap"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css';

function Header() {
    const styles = {
        color: '#d90128',
        //backgroundImage: `url('static/images/door.jpg')`,
        // backgroundSize: '100%',
        height: '700px',
        transition: "backgroundSize 1s",
    }
    //const background = { backgroundSize: 'cover' };
    return (
        <div style={{ width: 'auto', height:'70rem'}} className="mb-5">
            <div fluid className="jumbo">
                <h2 className=" top-subtitle text-center  pt-5 px-5 " style={{ color: styles.color }}>Entertainment</h2>
                <h1 className="title display-1 text-center dead-dude mx-2" style={{fontSize: "12vw"}}>Heinous Horror</h1>
                <h2 className="text-white subtitle text-center text-uppercase">For true horror fans</h2>
            </div>
        </div>
    );


}
export default Header