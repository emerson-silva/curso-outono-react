import { Component } from "react";
import Header from "../Header";
import NavBar from "../NavBar";
import SearchForm from "../SearchForm";

/* TODO:
    -Criar GameBox
    -Renderizar lista de jogos
*/

export default class GamesPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            games: [],
            filterName: "",
            filteredGames: []
        }
    }

    loadGameList = () => {}

    //componentDidMount() {

    findGame = (name) => {}

    renderCompleteGameList = () => {
        // return filtered list
    }

    render () {
        return(
            <div id="games-page">
                <Header title="Games"/>
                <div className="container content">
                    <SearchForm placeholder="Find game" label="name" searchFunction={this.findGame} />
                    {/*render games*/}
                </div>
                <NavBar goToPage={this.props.goToPage}/>
            </div>
        )
    }
}