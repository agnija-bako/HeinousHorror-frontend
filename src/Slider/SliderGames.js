import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as Constants from '../Constants'
import CardElement from "../Components/CardElement"



function SliderMovies(props) {
    return (
    <div>
        <h2 className="subtitle text-white mx-5" >{props.category}</h2>
        <Slider {...Constants.sliderSettings}>
            {props.games.map((game) => {
                return (
                    <div key={game}>
                        <CardElement key={game.id} titleOriginal={game.name} poster={game.cover.url} date={game.release_date} votes={game.rating}/>
                    </div>
                );
            })}
        </Slider>
    </div>
    )
}
export default SliderMovies