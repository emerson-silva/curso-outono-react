import React, { Component } from 'react';

export default class Game extends Component {

    constructor (params) {
        super(params);
    }

    state = {
        id: "data.id",
        name: "data.name"
    }

    removeGame = () => {
        this.props.removeGame(this.props.game.id);
    }

    render () {
        console.log(this.props.game);
        return (
            <div className="item my-4">
                <div className="item-title">
                    <strong className="id">{this.props.game.id}</strong>
                    <string className="name">Name: {this.props.game.name}</string>
                    <span onClick={this.removeGame}>remove game</span>
                </div>
            </div>
        )
    }
}