import React from "react"

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
            <li key={movie.id}>{movie.original_title}</li>);
        return (
            <div>{movieItems}</div>
        )
    }
}

export default Popular
