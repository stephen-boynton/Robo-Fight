import React, { Component } from "react";
import "../styles/HomeView.css";

export default class HomeView extends Component {
<<<<<<< HEAD
  constructor() {
    super();
};
  _handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.props.player);
    fetch("/fight")

  };

  render(){
    return(
      <div className="HomeView">
        <form className="form" onSubmit={this._handleSubmit}>
            <label  className="username-label">Enter your username:</label>
            <input type="username" className={this.props.player} id="username"/>
            <button type="submit" className="button" id="button">Start</button>
=======
  render() {
    return (
      <div className="HomeView">
        <div className="homeTitle">
          <h1>ROBO-FIGHT 4</h1>
          <h3>Redo This</h3>
        </div>

        <form className="form">
          <label className="username-label">
            What is your name, oh great deleter?
          </label>
          <input
            autoComplete="false"
            type="username"
            className="username"
            id="username"
          />
          <button type="button" className="form-button" id="button">
            Start
          </button>
>>>>>>> e936cdc1508d6bdb83788ecd23aeebe853efac16
        </form>
        <div className="instructions-container">
          <p>Instructions go here...</p>
        </div>
      </div>
    );
  }
}
