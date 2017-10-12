import React from "react";
import HealthBar from "./HealthBar"

export default function HealthDisplay (props) {
    return(
        props.health.map(player => {
           return <HealthBar player={player} key={player.name}/>
        })
    )
}
