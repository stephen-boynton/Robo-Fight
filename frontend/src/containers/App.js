import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import FightView from "./FightView";
import GameOverView from "./GameOverView";
import ScoresView from "./ScoresView";
import HomeView from "./HomeView";
import "../styles/App.css";

class App extends Component {
  state = {
    player: ""
  };
  _handlePlayerName = playerName => {
    this.setState = {
      player: playerName
    };
  };
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/fight"
            component={() => <FightView playerName={this.state.player} />}
          />
          <Route exact path="/gameover" component={GameOverView} />
          <Route exact path="/topscores" component={ScoresView} />
          <Route
            exact
            path="/"
            component={() => <HomeView player={this._handlePlayerName} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
