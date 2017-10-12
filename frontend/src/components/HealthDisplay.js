import React from "react";
import HealthBar from "./HealthBar";
import "../styles/HealthDisplay.css";

export default function HealthDisplay(props) {
  return (
    <div className="HealthDisplay">
      {props.players.map(player => {
        return <HealthBar player={player} key={player.name} />;
      })}
    </div>
  );
}
