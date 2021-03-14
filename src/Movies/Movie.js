import React from "react"
//import Image from 'react-bootstrap/Image'
//import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row } from "react-bootstrap"

function Movie(props) {
    let badgeColor = "badge-success"
    if (props.votes < 3) {
        badgeColor = "badge-danger"
    }
    else if (props.votes > 3 && props.votes < 6) {
        badgeColor = "badge-warning"
    }
    return (
        <Row>
            <Card style={{ width: '18rem', border: '0px solid white' }}>
                <Card.Img variant="top" src={props.poster} />
                <Card.Body style={{ marginTop: '-2.7rem' }}>
                    <a href="/" className={`badge ${badgeColor} py-3 px-2`} style={{ borderRadius: '50%', border: 'white solid 2px' }}>{props.votes * 10} %</a>
                    <Card.Title>{props.titleOriginal}</Card.Title>
                    <Card.Text>{props.date}</Card.Text>
                </Card.Body>
            </Card>
        </Row >

    )
}
export default Movie