import React, { Component } from 'react';

const ScoreBoard = (props) => {
    return (
        <ul>
            {props.scores.map((score)=>{
                return (
                <li>
                    <p>{score.username}</p>
                    <p>{score.score}</p>
                </li>
                )
            })}
        </ul>
    )
}