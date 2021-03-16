import React from "react"
import Movie from "./Movie"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import PrevArrow from "./ArrowPrevious"
import NextArrow from "./ArrowNext"
import './Movies.css'

class Popular extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
    }

    async componentDidMount() {
        await fetch("https://localhost:44390/api/movies/popular")
            .then(response => response.json())
            .then(data => {
                this.setState({ movies: data.results })
            })
        console.log(this.state.movies)

    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 4,
            initialSlide: 0,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div>
                <h2 className="my-3">Popular movies</h2>

                <Slider {...settings}>
                    {this.state.movies.map((movie) => {
                        return (
                            <div key={movie}>
                                <Movie key={movie.id} titleOriginal={movie.original_title} poster={movie.poster_path} date={movie.release_date} votes={movie.vote_average} />
                            </div>
                        );
                    })}
                </Slider>
            </div>
        )
    }
}

export default Popular
