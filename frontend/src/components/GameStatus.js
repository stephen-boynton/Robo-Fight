import React from "react";
import "../styles/GameStatus.css";

export default function GameStatus(props) {
  return (
    <div className="GameStatus">
      <p>
        Round: {props.status.round}/{props.status.rounds}
      </p>
    </div>
  );
}
