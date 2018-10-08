import React, { Component } from 'react';
import './App.css';
import Deck from './Deck.js'
// import Card from './Card.js'




class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Elements
        </header>
        <div id="gameboard">
          <Deck />
          <div id="player">
            <div className="slots1">
              <div id="fire1"></div>
              <div id="light1"></div>
              <div id="earth1"></div>
              <div id="water1"></div>
              <div id="shadow1"></div>
            </div>
          </div>
          <div id="divider"></div>
          <div id="opponent">
            <div className="slots2">
              <div id="fire2"></div>
              <div id="light2"></div>
              <div id="earth2"></div>
              <div id="water2"></div>
              <div id="shadow2"></div>
            </div>
          </div>
          <Deck />
        </div>
      </div>
    );
  }
}

export default App;
