import React, { Component } from "react";
import HealthDisplay from "../components/HealthDisplay";
import Robot from "../components/Robot";
import FightLog from "../components/FightLog";
import Moves from "../components/Moves";

export default class FightView extends Component {
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
