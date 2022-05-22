import React, { Component } from "react";
import GameBox from "../GameBox";
import NavBar from "../NavBar";
import PageHeader from "../PageHeader";
import SearchForm from "../SearchForm";

export default class GamePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [],
            filterName: "",
            filteredGames: []
        };
    }

    loadGameList = () => {
        fetch("http://localhost:3001/rest/fake/games/").then(response => {
            response.json().then(data => {
                this.setState({
                    games: data
                });
            });
        });
    }

    componentDidMount() {
        this.loadGameList();
    }

    findGame = (name) => {
        this.setState({
            filterName: name
        });
    }

    renderCompleteGameList = () => {
        return (
            this.state.games.map(game => {
                return <GameBox key={game.id} gameId={game.id} />
            })
        );
    }

    renderFilteredGameList = () => {
        const filterByName = this.state.filterName.toLowerCase();
        const gameList = this.state.games;
        return (
            gameList.filter(game => game.name.toLowerCase().includes(filterByName)).map(game => {
                return <GameBox key={game.id} gameId={game.id} />
            })
        );
    }

    render() {
        return (
            <div id="games-page">
                <PageHeader title="Games" />

                <div className="container content">
                    <SearchForm placeholder="Find game" label="name" searchFunction={this.findGame} />
                    {this.state.filterName ? this.renderFilteredGameList() : this.renderCompleteGameList()}
                </div>
                <NavBar goToPage={this.props.goToPage} />
            </div>
        );
    }
}