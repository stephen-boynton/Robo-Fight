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
  threeSecondDelay,
  customeDelay
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
    moves: ["Chop", "Boltbuster", "Block"],
    playerTurn: true,
    wins: 0,
    currentRound: 1,
    fightLog: `The two opponents are ready for battle!`,
    totalRounds: 10,
    movieAudio: ""
  };

  ////////////// Handler Functions  //////////////////////
  _fakeFetch = async () => {
    await threeSecondDelay();
    this.setState({ newRound: false });
  };

  _handleClick = evt => {
    if (this.state.playerTurn) {
      this._handleMove(evt.target.value);
    }
  };

  componentDidMount() {
    // fake fetch timing
    this._fakeFetch();
  }
  // Round control =================================
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
    const playSong = (move) => {
      const audio = document.getElementById('audio')
      audio.setAttribute("src", `/fx/${move}.mp3`)
      console.log("audio", audio);
      audio.play()
    }
    playSong(evt.target.value);
    }
  _isRobotDefeated = () => {
    return this.state.robot.hp <= 0;
  };

  _handleRoundEnd = () => {
    this.setState({
      currentRound: this.state.currentRound + 1,
      fightLog: `101010100101010101 - It insults you!`,
      newRound: true,
      playerTurn: true,
      robot: {
        ...this.state.robot,
        hp: 4
      }
    });
    this._fakeFetch();
  };

  // Health control ==================================
  _damagePlayer = () => {
    const playerHp = this.state.player.hp;
    this.setState({
      fightLog: `${this.state.robot.name} struck ${this.state.player
        .name} with BinaryAttack!`,
      player: {
        ...this.state.player,
        hp: playerHp - 1
      }
    });
  };

  _critPlayer = () => {
    const playerHp = this.state.player.hp;
    this.setState({
      fightLog: `${this.state.robot.name} struck ${this.state.player
        .name} with NeckReprocesser!`,
      player: {
        ...this.state.player,
        hp: playerHp - 2
      }
    });
  };

  _damageRobot = () => {
    const roboHp = this.state.robot.hp;
    this.setState({
      fightLog: `${this.state.player.name} struck ${this.state.robot
        .name} with a karate chop!`,
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
      fightLog: `${this.state.player.name} struck ${this.state.robot
        .name} with BoltBreaker!`,
      robot: {
        ...this.state.robot,
        hp: roboHp - 2
      },
      playerTurn: false
    });
  };

  // Game action control ===========================

  _enemyTurn = async () => {
    console.log("Enemy turn!");
    await customeDelay(3);
    let enemyMove = enemyTurn();
    this._handleMove(enemyMove);
    this.setState({ playerTurn: true });
  };

  _handleMove = moveName => {
    console.log(this.state.playerTurn);
    if (this.state.playerTurn) {
      //Player turn----------------------
      switch (moveName) {
        case "Chop":
          if (punchChanceToHit()) {
            this._damageRobot();
            console.log(this._isRobotDefeated());
            if (this._isRobotDefeated()) {
              this._handleRoundEnd();
              break;
            }
            this._enemyTurn();
            break;
          } else {
            this.setState({
              fightLog: `${this.state.player
                .name} tries to do something resembling karate...`
            });
            this._enemyTurn();
            break;
          }
        case "Boltbuster":
          if (bigPunchChanceToHit()) {
            this._critRobot();
            if (this._isRobotDefeated()) {
              this._handleRoundEnd();
              break;
            }
            this._enemyTurn();
            break;
          } else {
            this.setState({
              fightLog: `${this.state.player.name} attacks... the air!`
            });
            this._enemyTurn();
            break;
          }
        case "Block":
          if (blockChanceToHit()) {
            this._damageRobot();
            this._enemyTurn();
            break;
          } else {
            this.setState({
              fightLog: `${this.state.player.name} attacks... the air!`
            });
            this._enemyTurn();
            break;
          }
      }
    } else if (!this.state.playerTurn) {
      //Robot turn --------------------
      switch (moveName) {
        case "Chop":
          if (punchChanceToHit()) {
            this._damagePlayer();
            break;
          } else {
            this.setState({
              fightLog: `${this.state.robot
                .name} computes the efficiency of sliced bread...`
            });
            break;
          }
        case "Boltbuster":
          if (bigPunchChanceToHit()) {
            this._critPlayer();
            break;
          } else {
            this.setState({
              fightLog: `${this.state.robot.name} stands still menancingly...`
            });
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
  // Render method ====================================
  render() {
    return (
      <div>
      <audio id="audio" src={this.state.moveAudio} autostart="true"></audio>
      <div className="FightView">
        {this._handleNewRound()}
        <HealthDisplay
          player={this.state.player}
          robot={this.state.robot}
          current={this.state.currentRound}
          total={this.state.totalRounds}
        />
        <Robot robot={this.state.robot} />
        <FightLog message={this.state.fightLog} />
        <Moves moves={this.state.moves} handleClick={this._handleClick} />
      </div>
    </div>

    );
  }
}
