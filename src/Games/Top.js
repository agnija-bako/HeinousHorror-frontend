import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import * as Constants from '../Constants'
import SliderGames from "../Slider/SliderGames"


class Top extends React.Component {
    constructor() {
        super();
        this.state = {
            games: [],
        }
    }

    componentDidMount() {
        fetch("https://localhost:44390/api/games/top")
            .then(response => response.json())
            .then(data => {
                this.setState({ games: data})
                this.getCovers()               
            });
            
    }
     getCovers() {
        this.state.games.forEach(game => {
         fetch(`https://localhost:44390/api/games/covers/${game.id}`) 
         .then(response => response.json())
         .then(data => {
            game.cover = data[0].url        
         });
        });
    }
    render() { 
        return (
            <div>
               <SliderGames games={this.state.games} category={Constants.categories.gamesCategories.Top}/>
            </div>
        )
    }
}

export default Top



