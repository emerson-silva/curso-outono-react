import React, { Component } from "react";

export default class Header extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="container-fluid header text-center p-4 bg-light">
                <h3>{this.props.title}</h3>
            </div>
        )
    }
}