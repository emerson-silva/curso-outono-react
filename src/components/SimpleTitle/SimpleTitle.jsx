import React from "react";

export default function SimpleTitle(props) {
    return (
        <h3 className="m-3 container-fluid text-center">{props.text}</h3>
    );
}