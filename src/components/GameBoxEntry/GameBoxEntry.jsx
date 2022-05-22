import { Component } from "react";

export default class GameBoxEntry extends Component {
    render() {
        return(
            <tr>
                <th scope="row">{this.props.position}</th>
                <td>{this.props.score.player}</td>
                <td>{this.props.score.time}</td>
                <td>{this.props.score.score}</td>
            </tr>
        );
    }
}