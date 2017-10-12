import React, { Component } from 'react';


export default class HomeView extends Component {
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
        </form>
        <div className="instructions-container">
          <p>Instructions go here...</p>
        </div>
      </div>
    )
  }
}
