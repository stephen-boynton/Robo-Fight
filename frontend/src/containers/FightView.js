import React, { Component } from "react";
import HealthDisplay from "../components/HealthDisplay";
import Robot from "../components/Robot";
import FightLog from "../components/FightLog";
import Moves from "../components/Moves";
import { punchChanceToHit, bigPunchChanceToHit, blockChanceToHit } from "../fightHelpers"

export default class FightView extends Component {


  _handleMove = (moveName) => {
    switch (moveName) {
      case "Chop":
        if(punchChanceToHit()){
          //affect health of target
        }
        break;
      case "Roundhouse Kick":
        if(bigPunchChanceToHit()){
          //affect health of target
        }
        break;
      case "Block":
        if(blockChanceToHit()){
          //affect health of target
        }
      }
  }


  render() {
    return (
      <div className="FightView">
        <HealthDisplay />
        <Robot />
        <FightLog />
        <Moves />
      </div>
    );
  }
}
