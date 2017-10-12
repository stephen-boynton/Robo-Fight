import React, { Component } from "react";
import HealthDisplay from "../components/HealthDisplay";
import Robot from "../components/Robot";
import FightLog from "../components/FightLog";
import RoundOverlay from "../components/RoundOverlay";
import Moves from "../components/Moves";
import {
  punchChanceToHit,
  bigPunchChanceToHit,
  blockChanceToHit
} from "../fightHelpers";
import "../styles/FightView.css";

export default class FightView extends Component {
  state = {
    fighters: [
      {
        fighterType: "player",
        hp: 20,
        maxHp: 20,
        image: "",
        name: this.props.player
      },
      {
        fighterType: "robot",
        hp: 4,
        maxHp: 4,
        image: "https://robohash.org/IGX.png?set=set1",
        name: "Whatever"
      }
    ],
    moves: ["Chop", "Roundhouse Kick", "Block"],
    playerTurn: true,
    wins: 0,
    game: {
      round: 1,
      rounds: 10
    }
  };

  ////////////// Handler Functions  //////////////////////

  _handleClick = evt => {
    this._handleMove(evt.target.value);
  };

  _handleMove = moveName => {
    let turn = this.state.playerTurn
    let fighter = turn ? 0 : 1;
    let oldHp = this.state.fighters[fighter].hp
    switch (moveName) {
      case "Chop":
        if (punchChanceToHit()) {
          this.state.fighters[fighter].hp = oldHp - 1;
          this.forceUpdate();
        } else {

        }
        break;
      case "Roundhouse Kick":
        if (bigPunchChanceToHit()) {
          this.state.fighters[fighter].hp = oldHp - 2;
          this.forceUpdate();
        } else {

        }
        break;
      case "Block":
        if (blockChanceToHit()) {
          this.state.fighters[fighter].hp = oldHp - 1;
          this.forceUpdate();
        } else {

        }
        break;
    }
    this.setState((prevState)=>{
      return {playerTurn: !prevState.playerTurn}
    });
  };

  componentDidUpdate(){
    console.log("fighters", this.state)
  }

  render() {

    return (
      <div className="FightView">
        <RoundOverlay
          image={this.state.fighters[1].image}
          round={this.state.game.round}
        />
        <HealthDisplay players={this.state.fighters} status={this.state.game} />
        <Robot robot={this.state.fighters[1]} />
        {<FightLog />}
        <Moves moves={this.state.moves} handleClick={this._handleClick} />
      </div>
    );
  }
}
