import React from "react"
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

function Movie(props) {
    return (
        <div>
            <Image src={props.poster} thumbnail />
            <p>{props.titleOriginal}</p>
            <p>{props.date}</p>
            <Button>{props.votes}</Button>
        </div>

    )
}
export default Movie