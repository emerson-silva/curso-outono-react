import { Component } from 'react';
import './App.css';
import GamesPage from './components/GamesPage';
import HighScorePage from './components/HighScorePage/HighScorePage';
import PlayersPage from './components/PlayersPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamePage: "games",
      playersPage: "players",
      highScorePage: "highScore",
      actualPage: "games"
    };
    this.goToPage = this.goToPage.bind(this);
  }

  goToPage = function (pageName) {
    this.setState({
      actualPage: pageName
    })
  }

  render() {
    return (
      <>
        {this.state.actualPage == this.state.gamePage && <GamesPage pageName={this.state.gamePage} goToPage={this.goToPage} />}
        {this.state.actualPage == this.state.highScorePage && <HighScorePage pageName={this.state.highScorePage} goToPage={this.goToPage} />}
        {this.state.actualPage == this.state.playersPage && <PlayersPage pageName={this.state.playersPage} goToPage={this.goToPage} />}
      </>
    );
  }
}

export default App;
