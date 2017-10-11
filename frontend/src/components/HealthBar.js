import React from "react";

export default function HealthBar(props) {
  return (
    <div className="HealthBar">
      <progress value={props.health} max={props.maxHealth} />
      <h3>{props.name}</h3>
    </div>
  );
}
