import { Component } from "react";
import Header from "../Header";
import NavBar from "../NavBar";

export default class HighScorePage extends Component {
    render () {
        return(
            <div id="high-score-page">
                <Header title="HighScores"/>
                <div className="container content">
                </div>
                <NavBar goToPage={this.props.goToPage}/>
            </div>
        )
    }
}