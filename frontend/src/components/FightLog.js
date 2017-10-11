import React, { Component } from 'react';
import '../styles/App.css';

class FightLog extends Component {

  state={
    log: []
  }

  componentDidUpdate(prevProps, prevState){
    let newLog = prevState.log;
    newLog.unshift(this.props.fightText)
    if(newLog.length > 5){
      newLog.pop();
    }
    this.setState({
      log: newLog
    })
  }

  render() {
    return (
      <div className="FightLog">
        <ul className="logUl">
          {this.state.log.map((item)=>{
            // <FightLogItem text={item}/>
          })}
        </ul>
      </div>
    );
  }
}

export default FightLog;
