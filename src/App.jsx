import React, { Component } from 'react';
import './App.css';
import GamePage from './components/GamePage';
import PlayerPage from './components/PlayerPage';
import ScorePage from './components/ScorePage';
import ClickCountContextProvider from './context/ClickCountContext';
import { PlayerContext } from './context/PlayerContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homePage: "games",
      actualPage: "games",
      playerName: "Emerson"
    };
  }

  setPlayerName = (playerName) => {
    this.setState({
      playerName: playerName
    })
  }

  goToPage = pageName => {
    this.setState({
      actualPage: pageName
    });
  }
  
  render() {
    return (
      <PlayerContext.Provider value={{playerName: this.state.playerName, setPlayerName: this.setPlayerName}}>
        <ClickCountContextProvider>
          {this.state.actualPage === "games" ? <GamePage goToPage={this.goToPage} /> : <></>}
          {this.state.actualPage === "players" ? <PlayerPage goToPage={this.goToPage} /> : <></>}
          {this.state.actualPage === "scores" ? <ScorePage goToPage={this.goToPage} /> : <></>}
        </ClickCountContextProvider>
      </PlayerContext.Provider>
    );
  }
}

export default App;
