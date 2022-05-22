import { Component } from "react";
import ArrowDown from "../ArrowDown";
import ArrowUp from "../ArrowUp";
import GameBoxEntry from "../GameBoxEntry/GameBoxEntry";

export default class GameBox extends Component {
    constructor (props) {
        super(props);
        this.state = {
            expanded: false,
            scores: []
        };
    }

    componentDidMount() {
        if (this.props.higherScores) {
            const {gameName, higherScores} = this.props;
            this.setState({
                name: gameName,
                scores: higherScores
            });
        } else {
            fetch("http://localhost:3001/rest/fake/games/"+this.props.gameId).then(response => {
                response.json().then(data=> {
                    this.setState({
                        name: data.name,
                        scores: data.scores
                    });
                });
            })
        }
    }

    toogleExpanded = () => {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    render() {
        return (
            <div className={this.state.expanded?"card game-box expanded": "card game-box"}>
                <div className="card-header">
                    <div className="float-start">
                        <h4 className="game-title mt-2">{this.state.name}</h4>
                        <span className="player-name">{this.state.scores[0]?this.state.scores[0].player:''}</span>
                    </div>
                    <div className="float-end mt-2 game-best-score">
                        <h5>HighScore</h5>
                        <span>{this.state.scores[0]?this.state.scores[0].score:''}</span>
                    </div>
                </div>
                <div className="card-body high-scores-background">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Player</th>
                                <th scope="col">Time</th>
                                <th scope="col">HighScore</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.scores.map((score, index) => {
                               return (
                                   <GameBoxEntry key={index} position={index+1} score={score} />
                               )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="card-footer d-grid m-0 p-0">
                    <div className="col-1 mx-auto d-flex justify-content-center">
                        {
                            this.state.expanded ?
                            <ArrowUp onClickFunction={this.toogleExpanded}/>:<ArrowDown onClickFunction={this.toogleExpanded}/>
                        }
                    </div>
                </div>
            </div>
        );
    }
}