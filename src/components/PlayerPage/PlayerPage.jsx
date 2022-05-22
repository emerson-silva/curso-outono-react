import React, { useContext, useEffect, useState } from "react";
import GameBox from "../GameBox";
import NavBar from "../NavBar";
import PageHeader from "../PageHeader";
import SearchForm from "../SearchForm";
import SimpleTitle from "../SimpleTitle";
import { PlayerContext } from "../../context/PlayerContext";

// props get as parameter, not as a this.props attribute
function PlayerPage(props) {
    //useState a Hook :)
    const [games, setGames] = useState([]);
    const context = useContext(PlayerContext);
    const [playerName, setPlayerName] = useState(context.playerName);

    const searchPlayer = (name) => {
        setPlayerName(name);
        context.setPlayerName(name);
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

    // const [clickCount, setClickCount] = useState(0);
    // const headerClicked = function () {
    //     setClickCount(clickCount+1);
    // }

    const didUpdate = () => {
        //console.log("header clicked " + clickCount + " times");
    }

    // useContext
    // const playerContextName = useContext(PlayerContext);
    // const setPlayerContextName = useContext(PlayerContext);

    useEffect(didUpdatePlayer, [playerName]);

    return (
        <div id="players-page">
            <PageHeader title="Players"/>
            <div className="container content">
                <SearchForm placeholder="Search player by nickname" label="nickname" searchFunction={searchPlayer} />
                {playerName &&
                    <SimpleTitle text={playerName + "'s HighScores"}/>
                }
                {games.map(game => {
                    return <GameBox key={playerName+"-"+game.id} gameName={game.name} higherScores={game.highScores} />
                })}
            </div>
            {/* Dont use this.props, the props is a variable in this scope use only 'props' */}
            <NavBar goToPage={props.goToPage} />
        </div>
    )
}

export default PlayerPage;