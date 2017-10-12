import React, { Component } from 'react';


export default class HomeView extends Component {
  constructor() {
    super();

}
  handleSubmit = (evt) => {
    evt.preventDefualt();
    // console.log(evt.target);
    this.props.player
    fetch('./fight')
  }

  render(){
    return(
      <div className="HomeView">
        <form className="form">
            <label  className="username-label">Enter your username:</label>
            <input type="username" className="username" id="username"/>
            <button type="submit" className="button" id="button">Start</button>
        </form>
        <div className="instructions-container">
          <p>Instructions go here...</p>
        </div>
      </div>
    )
  }
}
