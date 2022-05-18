import React, { useEffect, useState } from "react";
//import GameBox from "../GameBox";
import NavBar from "../NavBar";
import Header from "../Header";
import SearchForm from "../SearchForm";
import SimpleTitle from "../SimpleTitle";

function PlayerPage(props) {

    //useState a Hook :)
    const [games, setGames] = useState([]);
    const [playerName, setPlayerName] = useState("");

    const searchPlayer = (name) => {
        setPlayerName(name);
    }

    const didUpdatePlayer = function() {
        if (playerName && playerName.length > 0) {
            getPlayerHighScores();
        }
    }

    const getPlayerHighScores = () => {
        console.log("getPlayerHighScores");
        const regex = new RegExp('\\w');
        console.log(regex.test(playerName));
        if (regex.test(playerName)) {
            fetch("http://localhost:3001/rest/fake/players/"+playerName).then(response => {
                response.json().then(data => {
                    setGames(data);
                }
            )});
        }
    }

    useEffect(()=>{console.log("useEffect")});

    return(
        <div id="players-page">
            <Header title="Players"/>
            <div className="container content">
                {/*SearchForm*/}
                {/*SimpleTitle*/}
                {/*GameBox*/}
            </div>
            <NavBar goToPage={props.goToPage}/>
        </div>
    )
}
export default PlayerPage;