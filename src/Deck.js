import React, { Component } from 'react'
import Card from './Card.js'
import './Deck.css'

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// class Deck extends Component
//   constructor(props){
//     super(props);
//     this.state = {
//       img: "../imgs/elements.PNG"
//     }
//
//
//   }





function Deck() {
  let elements = ['F', 'L', 'E', 'W', 'S',
                  'F', 'L', 'E', 'W', 'S',
                  'F', 'L', 'E', 'W', 'S',
                  'F', 'L', 'E', 'W', 'S',
                  'F', 'L', 'E', 'W', 'S']

  elements = shuffle(elements)
  let playerDeck = []

  for (var i = 0; i < elements.length; i++) {
    playerDeck.push(new Card())
    playerDeck[i]['state']['element'] = elements[i]
    if (playerDeck[i]['state']['element'] === 'F') {
      playerDeck[i]['state']['face'] = '../imgs/FIRE.PNG'
    } else if (playerDeck[i]['state']['element'] === 'L') {
      playerDeck[i]['state']['face'] = '../imgs/Light.PNG'
    } else if (playerDeck[i]['state']['element'] === 'E') {
      playerDeck[i]['state']['face'] = '../imgs/Earth.PNG'
    } else if (playerDeck[i]['state']['element'] === 'W') {
      playerDeck[i]['state']['face'] = '../imgs/Water.PNG'
    } else if (playerDeck[i]['state']['element'] === 'S') {
      playerDeck[i]['state']['face'] = '../imgs/Shadow.PNG'
    }
  }

  let playerHand = [];
  function drawCard() {
      playerHand.push(playerDeck.pop())
      console.log(playerHand)
  }

  function startGame() {



    playerHand.push(playerDeck.pop())
    playerHand.push(playerDeck.pop())
    playerHand.push(playerDeck.pop())
    playerHand.push(playerDeck.pop())
    console.log(playerHand)
  }

  return(
    <div>
      <div>
        <button onClick={startGame} type='button' >start game
        </button>
      </div>

      <div onClick={drawCard} id='deck'>
        <img src="../imgs/elements.PNG" alt="deck"/>
      </div>
    </div>
  )
}

export default Deck
