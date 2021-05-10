import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import * as Constants from '../Constants'
import SliderGames from "../Slider/SliderGames"


class Top extends React.Component {
    constructor() {
        super();
        this.state = {
            games: [{
                cover: "",
            }],
        }
    }

    async componentDidMount() {
        await fetch("https://localhost:44390/api/games/top")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({ games: data})
            })
        this.state.games.forEach(element => {
             fetch("https://localhost:44390/api/games/covers/" + element.id)
            .then(response => response.json())
            .then(data => {
                console.log(data, "covers")
            })
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