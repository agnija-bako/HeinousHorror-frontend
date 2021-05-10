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
            {props.movies.map((movie) => {
                return (
                    <div key={movie}>
                        <CardElement key={movie.id} titleOriginal={movie.original_title} poster={movie.poster_path} date={movie.release_date} votes={movie.vote_average}/>
                    </div>
                );
            })}
        </Slider>
    </div>
    )
}
export default SliderMovies