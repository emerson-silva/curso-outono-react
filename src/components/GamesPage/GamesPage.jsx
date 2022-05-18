import { Component } from "react";
import Header from "../Header";
import NavBar from "../NavBar";

export default class GamesPage extends Component {
    constructor (props) {
        super(props);
        console.log(props);
    }

    render () {
        return(
            <div id="games-page">
                <Header title="Games"/>
                <div className="container content">
                </div>
                <NavBar pageName={this.props.pageName} goToPage={this.props.goToPage}/>
            </div>
        )
    }
}