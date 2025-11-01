import React, { Component } from 'react'
import libros from './../../assets/libros.png'

export default class Libros extends Component {
  render() {
    return (
      <div>
        <img src={libros} alt="" style={{width:"100px"}}/>
      </div>
    )
  }
}
