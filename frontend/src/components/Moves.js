import React, { Component } from 'react';
import '../styles/App.css';

class Moves extends Component {
  render() {
    let moves = this.props.moves
    return (
      <div className="Moves">
        {moves.map((move)=>{
          return <button value={move} key={move} onClick={this.props.handleClick}>{move}</button>
        })}
      </div>
    );
  }
}

export default Moves;
