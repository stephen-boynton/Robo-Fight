import React, { Component } from "react";
import HealthDisplay from "../components/HealthDisplay";
import Robot from "../components/Robot";
import FightLog from "../components/FightLog";
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
        name: this.props.playerName
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
    score: 0
  };

  _handleMove = moveName => {
    switch (moveName) {
      case "Chop":
        if (punchChanceToHit()) {
          console.log("You used", moveName);
        } else {
          console.log("Missed");
        }
        console.log(this.state.playerTurn)
        break;
      case "Roundhouse Kick":
        if (bigPunchChanceToHit()) {
          console.log("You used", moveName);
        } else {
          console.log("Missed");
        }
        break;
      case "Block":
        if (blockChanceToHit()) {
          console.log("You used", moveName);
        } else {
          console.log("Blocked");
        }
        break;
    }
  };

  _handleClick = evt => {
    this._handleMove(evt.target.value);
  };

  render() {
    return (
      <div className="FightView">
        <HealthDisplay players={this.state.fighters} />
        <Robot robot={this.state.fighters[1]} />
        <FightLog />
        <Moves moves={this.state.moves} handleClick={this._handleClick} />
      </div>
    );
  }
}
