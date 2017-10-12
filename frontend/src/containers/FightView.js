import React, { Component } from "react";
import HealthDisplay from "../components/HealthDisplay";
import Robot from "../components/Robot";
import FightLog from "../components/FightLog";
import Moves from "../components/Moves";
import { punchChanceToHit, bigPunchChanceToHit, blockChanceToHit } from "../fightHelpers"

export default class FightView extends Component {

  state={
    player: {
      hp: 20,
      name: "Punk"
    },
    robot: {
      hp: 4,
      name: "Whatever"
    },
    moves:[
      "Chop",
      "Roundhouse Kick",
      "Block"
    ],
    playerTurn: true,
    score: 0
  }

  _handleMove = (moveName) => {
    switch (moveName) {
      case "Chop":
        if(punchChanceToHit()){
          console.log("You used", moveName);
        } else {
          console.log("Missed");
        }
        break;
      case "Roundhouse Kick":
        if(bigPunchChanceToHit()){
          console.log("You used", moveName);
        } else {
          console.log("Missed");
        }
        break;
      case "Block":
        if(blockChanceToHit()){
          console.log("You used", moveName);
        } else {
          console.log("Blocked");
        }
      }
  }

  _handleClick = (evt) => {
    this._handleMove(evt.target.value);
  }

  render() {
    return (
      <div className="FightView">
        {/* <HealthDisplay /> */}
        <Robot />
        <FightLog />
        <Moves moves={this.state.moves} handleClick={this._handleClick}/>
      </div>
    );
  }
}
