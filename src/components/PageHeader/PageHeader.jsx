import React from "react";
import { useClickCount } from "../../context/ClickCountContext";


export default function PageHeader(props) {
    const { clickCount, incrementCount } = useClickCount();

    console.log(clickCount);

    return (
        <div className="container-fluid header text-center p-4 bg-light" onClick={incrementCount}>
            <h3>{props.title + (clickCount ? " clicked " + clickCount + " times" : "")}</h3>
        </div>
    );
}