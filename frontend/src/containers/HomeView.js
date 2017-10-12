import React, { Component } from "react";
import "../styles/HomeView.css";

export default class HomeView extends Component {
   
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
        </form>
        <div className="instructions-container">
          <p>Instructions go here...</p>
        </div>
      </div>
    );
  }
}
