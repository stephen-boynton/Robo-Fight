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
    player: { hp: 20, maxHp: 20, image: "", name: this.props.player },
    robot: {
      hp: 4,
      maxHp: 4,
      image: "https://robohash.org/IGX.png?set=set1",
      name: "MAXIMUM_Max"
    },
    moves: ["Chop", "Roundhouse Kick", "Block"],
    playerTurn: true,
    wins: 0,
    currentRound: 1,
    totalRounds: 10,
    movieAudio: ""
  };

  ////////////// Handler Functions  //////////////////////
  _fakeFetch = async () => {
    await threeSecondDelay();
    this.setState({ newRound: false });
  };

  _enemyTurn = async () => {
    await oneSecondDelay();
    let enemyMove = enemyTurn();
    this._handleMove(enemyMove);
    await oneSecondDelay();
    this.setState({ playerTurn: true });
  };

  componentDidMount() {
    // fake fetch timing
    this._fakeFetch();
  }

  _handleNewRound = () => {
    if (this.state.newRound) {
      return (
        <RoundOverlay
          image={this.state.robot.image}
          round={this.state.currentRound}
        />
      );
    } else {
      return;
    }
  };

  _handleClick = evt => {
    if (this.state.playerTurn) {
      this._handleMove(evt.target.value);
    }
  };

<<<<<<< HEAD
  _handleMove = moveName => {
    let turn = this.state.playerTurn
    let fighter = turn ? 1 : 0;
    let oldHp = this.state.fighters[fighter].hp
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
=======
  _damagePlayer = () => {
    const playerHp = this.state.player.hp;
    this.setState({
      player: {
        ...this.state.player,
        hp: playerHp - 1
      }
    });
  };

  _critPlayer = () => {
    const playerHp = this.state.player.hp;
    this.setState({
      player: {
        ...this.state.player,
        hp: playerHp - 2
      }
    });
  };

  _damageRobot = () => {
    const roboHp = this.state.robot.hp;
    this.setState({
      robot: {
        ...this.state.robot,
        hp: roboHp - 1
      },
      playerTurn: false
    });
  };

  _critRobot = () => {
    const roboHp = this.state.robot.hp;
    this.setState({
      robot: {
        ...this.state.robot,
        hp: roboHp - 2
      },
      playerTurn: false
    });
>>>>>>> 57595c7c1cab24c006527497c94df0ad181091cd
  };

  _handleMove = moveName => {
    if (this.state.playerTurn) {
      switch (moveName) {
        case "Chop":
          if (punchChanceToHit()) {
            this._damageRobot();
            this._enemyTurn();
            break;
          } else {
            //miss
            this._enemyTurn();
            break;
          }
        case "Roundhouse Kick":
          if (bigPunchChanceToHit()) {
            this._critRobot();
            this._enemyTurn();
            break;
          } else {
            //miss
            this._enemyTurn();
            break;
          }
        case "Block":
          if (blockChanceToHit()) {
            this._damageRobot();
            this._enemyTurn();
            break;
          } else {
            //miss
            this._enemyTurn();
            break;
          }
      }
    } else if (!this.state.playerTurn) {
      //Robots turn -------------------------------------------------
      switch (moveName) {
        case "Chop":
          if (punchChanceToHit()) {
            this._damagePlayer();
            break;
          } else {
            //miss
            break;
          }
        case "Roundhouse Kick":
          if (bigPunchChanceToHit()) {
            this._critPlayer();
            break;
          } else {
            //miss
            break;
          }
        case "Block":
          if (blockChanceToHit()) {
            this._damagePlayer();
            break;
          } else {
            //miss
            break;
          }
      }
    }
  };

  render() {
    return (
      // <audio id="audio" src={this.state.moveAudio} autostart="true"></audio>
      <div className="FightView">
        {this._handleNewRound()}
        <HealthDisplay
          player={this.state.player}
          robot={this.state.robot}
          current={this.state.currentRound}
          total={this.state.totalRounds}
        />
        <Robot robot={this.state.robot} />
        {<FightLog />}
        <Moves
          moves={this.state.moves}
          turn={this.state.playerTurn}
          handleClick={this._handleClick}
        />
      </div>
    );
  }
}
