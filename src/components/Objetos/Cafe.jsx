import React, { Component } from 'react'
import cafe from './../../assets/cafe.png'

export default class Cafe extends Component {
  render() {
    return (
      <div>
      <img src={cafe} alt="" style={{width:"75px"}}/>
      </div>
    )
  }
}
