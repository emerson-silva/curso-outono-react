import { Component } from "react";
import Header from "../Header";
import NavBar from "../NavBar";
import HighScoreForm from "../HighScoreForm";

export default class HighScorePage extends Component {
    render () {
        return(
            <div id="high-score-page">
                <Header title="HighScores"/>
                <div className="container content">
                    <HighScoreForm />
                </div>
                <NavBar goToPage={this.props.goToPage}/>
            </div>
        )
    }
}