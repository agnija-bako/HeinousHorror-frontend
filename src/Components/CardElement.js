import React from "react"
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'



function CardElement(props) {
    let badgeColor = "badge-success"
    if (props.votes < 3) {
        badgeColor = "badge-danger"
    }
    else if (props.votes > 3 && props.votes < 6) {
        badgeColor = "badge-warning"
    }
    return (

        <Card style={{ width: '13rem', border: '0px solid black', backgroundColor: "black" }} className="mx-3 text-uppercase">
            <Card.Img variant="top" src={props.poster} />
            <Card.Body style={{ marginTop: '-2.7rem', color: "white" }} className="ml-0 pl-1">
                <a href="/" className={`badge ${badgeColor} py-3 px-2`} style={{ borderRadius: '50%', border: 'white solid 2px', marginLeft: '0' }}>{props.votes * 10} %</a>
                <Card.Title>{props.titleOriginal}</Card.Title>
                <Card.Text>{props.date}</Card.Text>
            </Card.Body>
        </Card>


    )
}
export default CardElement