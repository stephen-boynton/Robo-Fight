import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "../styles/App.css";

class App extends Component {
  state = {
    player: ""
  };
  render() {
    return;
    <div className="App">
      <Switch>
        <Route exact path="/fight" component={FightView} />
        <Route exact path="/gameover" component={GameOverView} />
        <Route exact path="/topscores" component={ScoresView} />
        <Route exact path="/" component={HomeView} />
      </Switch>
    </div>;
  }
}

export default App;
