import React, { Component } from 'react';
import Game from "./Game";

export default class Games extends Component {

    state = {
        games: []
    }

    componentDidMount() {
        fetch("http://localhost:3001/rest/fake/games").then(response => {
            response.json().then(data=> {
                console.log(data);
                this.setState({
                    games: data
                });
            });
        })
    }

    removeGame = (gameId) => {
        let novaLista = this.state.games.filter(game=>{
            return game.id != gameId;
        });
        console.log(novaLista + " " + this.state.games);
        this.setState({
            games: novaLista
        });
    }

    render() {
        console.log(this.state.games);
        return (
            <div>
                {
                    this.state.games.map(game=> {
                        return <Game game={game} removeGame={this.removeGame}/>
                    })
                }
            </div>
        )
    }
}