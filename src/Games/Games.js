import React from "react"
//import Popular from "./Popular"
//import Upcoming from "./Upcoming"
import Top from "./Top"
//import PlayingNow from "./PlayingNow"
import 'bootstrap/dist/css/bootstrap.min.css'

function Games() {
    return (
      <div>
        <div>
            <h1 style={{ color: "#d90128" }} className="text-uppercase my-3 text-center">Games</h1>
            <Top />
        </div>
      </div>
    )
  
  }
  
  export default Games