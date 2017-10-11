import React from "react";

export default function Robot(props) {
  return (
    <div className="Robot">
      <img src={props.image} />
      <h3>{props.name}</h3>
    </div>
  );
}
