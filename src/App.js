import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import './App.css';

import CharacterSelectPage from "./CharacterSelect/CharacterSelectPage";
import GamePage from "./GamePage";
import TitlePage from "./TitlePage";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [
                {name: "Danny Devito", wallet: 100, bet: 25, images:
                    [require("./Images/Celebrity Pack/DannyDevitoDefeat.jpg"), // 0 Lost?
                    require("./Images/Celebrity Pack/DannyDevitoLosing.jpg"), // 1
                    require("./Images/Celebrity Pack/DannyDevitoNeutral.jpg"), // 2 Nuetral
                    require("./Images/Celebrity Pack/DannyDevitoHappy.jpg"), // 3
                    require("./Images/Celebrity Pack/DannyDevitoVictory.jpg")]  // 4 win?
                },
                {name: "1-NAME", images:
                    [require("./CharacterSelect/Images/Smiley.png"), // 0 Lost?
                    require("./CharacterSelect/Images/Smiley.png"), // 1
                    require("./CharacterSelect/Images/Smiley.png"), // 2 Nuetral
                    require("./CharacterSelect/Images/Smiley.png"), // 3
                    require("./CharacterSelect/Images/Smiley.png")]  // 4 win?
                },
                {name: "2-NAME", images:
                    [require("./CharacterSelect/Images/Smiley.png"), // 0 Lost?
                    require("./CharacterSelect/Images/Smiley.png"), // 1
                    require("./CharacterSelect/Images/Smiley.png"), // 2 Nuetral
                    require("./CharacterSelect/Images/Smiley.png"), // 3
                    require("./CharacterSelect/Images/Smiley.png")]  // 4 win?
                },
                {name: "3-NAME", images:
                    [require("./CharacterSelect/Images/Smiley.png"), // 0 Lost?
                    require("./CharacterSelect/Images/Smiley.png"), // 1
                    require("./CharacterSelect/Images/Smiley.png"), // 2 Nuetral
                    require("./CharacterSelect/Images/Smiley.png"), // 3
                    require("./CharacterSelect/Images/Smiley.png")]  // 4 win?
                },
                {name: "4-NAME", images:
                    [require("./CharacterSelect/Images/Smiley.png"), // 0 Lost?
                    require("./CharacterSelect/Images/Smiley.png"), // 1
                    require("./CharacterSelect/Images/Smiley.png"), // 2 Nuetral
                    require("./CharacterSelect/Images/Smiley.png"), // 3
                    require("./CharacterSelect/Images/Smiley.png")]  // 4 win?
                },
                {name: "A-NAME", images:
                    [require("./CharacterSelect/Images/Smiley.png"), // 0 Lost?
                    require("./CharacterSelect/Images/Smiley.png"), // 1
                    require("./CharacterSelect/Images/Smiley.png"), // 2 Nuetral
                    require("./CharacterSelect/Images/Smiley.png"), // 3
                    require("./CharacterSelect/Images/Smiley.png")]  // 4 win?
                },
                {name: "B-NAME", images:
                    [require("./CharacterSelect/Images/Smiley.png"), // 0 Lost?
                    require("./CharacterSelect/Images/Smiley.png"), // 1
                    require("./CharacterSelect/Images/Smiley.png"), // 2 Nuetral
                    require("./CharacterSelect/Images/Smiley.png"), // 3
                    require("./CharacterSelect/Images/Smiley.png")]  // 4 win?
                },
                {name: "C-NAME", images:
                    [require("./CharacterSelect/Images/Smiley.png"), // 0 Lost?
                    require("./CharacterSelect/Images/Smiley.png"), // 1
                    require("./CharacterSelect/Images/Smiley.png"), // 2 Nuetral
                    require("./CharacterSelect/Images/Smiley.png"), // 3
                    require("./CharacterSelect/Images/Smiley.png")]  // 4 win?
                },
                {name: "D-NAME", images:
                    [require("./CharacterSelect/Images/Smiley.png"), // 0 Lost?
                    require("./CharacterSelect/Images/Smiley.png"), // 1
                    require("./CharacterSelect/Images/Smiley.png"), // 2 Nuetral
                    require("./CharacterSelect/Images/Smiley.png"), // 3
                    require("./CharacterSelect/Images/Smiley.png")]  // 4 win?
                },
                {name: "E-NAME", images:
                    [require("./CharacterSelect/Images/Smiley.png"), // 0 Lost?
                    require("./CharacterSelect/Images/Smiley.png"), // 1
                    require("./CharacterSelect/Images/Smiley.png"), // 2 Nuetral
                    require("./CharacterSelect/Images/Smiley.png"), // 3
                    require("./CharacterSelect/Images/Smiley.png")]  // 4 win?
                },
            ],
            selectedCharactersNames: []
        };

    }

    // Saves data from character select page into selectedCharactersNames[];
    characterSelectPageHandler(selectedCharacters) {
        this.setState({selectedCharactersNames: (selectedCharacters)})
        console.log("Selected Chars: " + selectedCharacters);
    }

    render() {
        return (
            <div className="container">
                <Router>

                    <Route path="/">
                        <TitlePage />
                    </Route>

                    <Route path="/CharacterSelectPage">
                        <CharacterSelectPage
                            characters = {this.state.characters}
                            handlerCall = {this.characterSelectPageHandler.bind(this)}/>
                    </Route>

                    <Route path="/GamePage">
                        <GamePage
                             characters = {this.state.characters}
                             selectedCharactersIndexes = {this.state.characters}
                        />
                    </Route>

                </Router>
            </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
