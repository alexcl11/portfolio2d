import React, { Component } from 'react'
import telefono from './../../assets/telefono.png'

export default class Telefono extends Component {
  render() {
    return (
      <div>
        <img src={telefono} alt="" style={{width:"100px"}}/>
      </div>
    )
  }
}
