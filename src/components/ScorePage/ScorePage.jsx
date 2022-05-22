import React, { Component } from "react";
import HighScoreForm from "../HighScoreForm/HighScoreForm";
import NavBar from "../NavBar";
import PageHeader from "../PageHeader";

export default class ScorePage extends Component {

    render() {
        return (
            <div id="high-score-page">
                <PageHeader title="HighScore" />

                <div className="container content my-3">
                    <HighScoreForm />
                </div>

                <NavBar goToPage={this.props.goToPage} />
            </div>
        );
    }
}