import React from "react"
import Movie from "./Movie"
import 'bootstrap/dist/css/bootstrap.min.css'
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
        const movieItems = this.state.movies.map((movie) =>
            <Movie key={movie.id} titleOriginal={movie.original_title} poster={movie.poster_path} date={movie.release_date} votes={movie.vote_average} />
        );
        return (
            <div>{movieItems}</div>
        )
    }
}

export default Popular
