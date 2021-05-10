import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import * as Constants from '../Constants'
import SliderMovies from "../Slider/SliderMovies"


class Top extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
    }
    async componentDidMount() {
        await fetch("https://localhost:44390/api/movies/top")
            .then(response => response.json())
            .then(data => {
                this.setState({ movies: data.results })
            })
    }
    render() {
        return (
            <div>
               <SliderMovies movies={this.state.movies} category={Constants.categories.movieCategories.Top}/>
            </div>
        )
    }
}

export default Top