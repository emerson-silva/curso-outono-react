import { Component } from "react";

// TODO: Usar context para pegar o nome do jogador default
export default class HighScoreForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            games: [],
            game: "",
            player: "",
            time: "",
            score: "",
            difficulty: "Normal"

        }
        this.registerNewHighScore = this.registerNewHighScore.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:3001/rest/fake/games/").then(response => {
            response.json().then(data => {
                let defaultGameId = (data[0])?data[0].id:"";
                this.setState({
                    games: data,
                    game: defaultGameId
                })
            })
        })
    }

    registerNewHighScore = (event) => {
        event.preventDefault();
        const {game, player, time, score, difficulty} = this.state;
        let reqData = {game, player, time, score, difficulty};

        console.log(reqData);
        fetch('http://localhost:3001/rest/fake/high-score', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reqData),
        }).then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    // use arrow function for automatic binding
    handleChange = event => {
        console.log("Setting " + event.target.name + " to " + event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form id="register-highscore" onSubmit={this.registerNewHighScore}>
                <div className="form-floating mb-3">
                    <select id="game-input" name="game" className="form-select" onChange={this.handleChange}>
                        {this.state.games.map(game => {
                            return (
                                <option key={game.id} value={game.id}>{game.name}</option>
                            );
                        })}
                    </select>
                    <label htmlFor="game-input">Game:</label>
                </div>

                <div className="form-floating mb-3">
                    <input id="player-input" name="player" type="text" className="form-control" placeholder="emerson.silva" pattern="\w+" value={this.state.player} onChange={this.handleChange} required={true} />
                    <label htmlFor="player-input" className="form-label">Player:</label>
                </div>

                <div className="form-floating mb-3">
                    <input id="time-input" name="time" type="text" className="form-control" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]" onChange={this.handleChange} placeholder="hh:mm:ss" required />
                    <label htmlFor="time-input" className="form-label">Time: hh:mm:ss</label>
                </div>

                <div className="form-floating mb-3">
                    <input id="score-input" name="score" type="number" className="form-control" placeholder="9999999999" onChange={this.handleChange} required />
                    <label htmlFor="score-input">Score: 9999999999</label>
                </div>

                <div className="form-floating mb-3">
                    <input id="difficulty-input" name="difficulty" type="text" className="form-control text-uppercase" list="difficulties" onChange={this.handleChange} placeholder="Normal" />
                    <label htmlFor="difficulty-input">Difficulty:</label>
                    <datalist id="difficulties">
                        <option value="very-easy">Very easy</option>
                        <option value="easy">Easy</option>
                        <option value="normal">Normal</option>
                        <option value="hard">Hard</option>
                        <option value="very-hard">Very hard</option>
                        <option value="nightmare">Nightmare</option>
                    </datalist>
                </div>

                <div className="mb-3 d-grid">
                    <input id="submit-high-score" type="submit" className="btn-lg btn-primary col-6 mx-auto" value="Save" />
                </div>
            </form>
        )
    }
}