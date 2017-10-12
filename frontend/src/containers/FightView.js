import React, { Component } from "react";
import HealthDisplay from "../components/HealthDisplay";
import Robot from "../components/Robot";
import FightLog from "../components/FightLog";
import RoundOverlay from "../components/RoundOverlay";
import Moves from "../components/Moves";
import {
  punchChanceToHit,
  bigPunchChanceToHit,
  blockChanceToHit,
  enemyTurn
} from "../helpers/fightHelpers";
import {
  oneSecondDelay,
  twoSecondDelay,
  threeSecondDelay
} from "../helpers/delayHelpers";
import "../styles/FightView.css";

export default class FightView extends Component {
  state = {
    newRound: true,
    fighters: [
      {
        fighterType: "player",
        hp: 20,
        maxHp: 20,
        image: "",
        name: this.props.player
      },
      {
        fighterType: "robot",
        hp: 4,
        maxHp: 4,
        image: "https://robohash.org/IGX.png?set=set1",
        name: "MAXIMUM_Max"
      }
    ],
    moves: ["Chop", "Roundhouse Kick", "Block"],
    playerTurn: true,
    wins: 0,
    currentRound: 1,
    totalRounds: 10
  };

  ////////////// Handler Functions  //////////////////////
  _fakeFetch = async () => {
    await threeSecondDelay();
    this.setState({
      newRound: false
    });
  };

  _enemyTurn = async () => {
    await oneSecondDelay();
    let enemyMove = enemyTurn();
    this._handleMove(enemyMove);
  }

  componentDidMount() {
    // fake fetch timing
    this._fakeFetch();
  }

  _handleNewRound = () => {
    if (this.state.newRound) {
      return (
        <RoundOverlay
          image={this.state.fighters[1].image}
          round={this.state.currentRound}
        />
      );
    } else {
      return;
    }
  };

  _handleClick = evt => {
    this._handleMove(evt.target.value);
  };

  _handleMove = moveName => {
<<<<<<< HEAD
    let turn = this.state.playerTurn;
    let fighter = turn ? 0 : 1;
    let oldHp = this.state.fighters[fighter].hp;
=======
    let turn = this.state.playerTurn
    let fighter = turn ? 1 : 0;
    let oldHp = this.state.fighters[fighter].hp
>>>>>>> 0a726f6f6bd9daed56c3b9dedd4c7011f829a0c6
    switch (moveName) {
      case "Chop":
        if (punchChanceToHit()) {
          this.state.fighters[fighter].hp = oldHp - 1;
          this.state.playerTurn = !turn;
          console.log(this.state.fighters[fighter].fighterType + "was hit by Chop");
          this.forceUpdate();
        } 
        break;
      case "Roundhouse Kick":
        if (bigPunchChanceToHit()) {
          this.state.fighters[fighter].hp = oldHp - 2;
          this.state.playerTurn = !turn;
          console.log(this.state.fighters[fighter].fighterType + "was hit by RK");
          this.forceUpdate();
        }
        break;
      case "Block":
        if (blockChanceToHit()) {
          this.state.fighters[fighter].hp = oldHp;
          this.state.playerTurn = !turn;
          this.forceUpdate();
        }
        break;
    }
    this._handleEndOfRound();
    this.setState(prevState => {
      return { playerTurn: !prevState.playerTurn };
    });
  };

  componentDidUpdate(){
    if(this.state.playerTurn === false){
      this._enemyTurn();
    }
  }

  render() {
    return (
      <div className="FightView">
        {this._handleNewRound()}
        <HealthDisplay
          players={this.state.fighters}
          current={this.state.currentRound}
          total={this.state.totalRounds}
        />
        <Robot robot={this.state.fighters[1]} />
        {<FightLog />}
        <Moves moves={this.state.moves} turn={this.state.playerTurn} handleClick={this._handleClick} />
      </div>
    );
  }
}
