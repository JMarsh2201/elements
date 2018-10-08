import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      element: '',
      face: '',
      back: '../imgs/elements.png'

    }
  }

  render() {
    console.log(this.props)
    return(
      <div className='card'>

      </div>
    )
  }
}

export default Card
