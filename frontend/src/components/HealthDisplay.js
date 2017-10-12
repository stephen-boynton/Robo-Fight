import React from "react";
import HealthBar from "./HealthBar";
import GameStatus from "./GameStatus";
import "../styles/HealthDisplay.css";

export default function HealthDisplay(props) {
  return (
    <div className="HealthDisplay">
      <HealthBar player={props.players[0]} key={props.players[0].name} />
      <GameStatus status={props.status} />
      <HealthBar player={props.players[1]} key={props.players[1].name} />
    </div>
  );
}
