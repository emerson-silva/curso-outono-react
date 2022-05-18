import { Component } from "react";
import Header from "../Header";
import NavBar from "../NavBar";

export default class PlayersPage extends Component {
    render () {
        return(
            <div id="players-page">
                <Header title="Players"/>
                <div className="container content">
                </div>
                <NavBar pageName={this.props.pageName} goToPage={this.props.goToPage}/>
            </div>
        )
    }
}