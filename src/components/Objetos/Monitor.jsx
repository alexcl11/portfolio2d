import React, { Component } from 'react'
import monitor from './../../assets/monitor.png'

export default class Monitor extends Component {
  render() {
    return (
      <div>
        <img src={monitor} alt="" style={{width:"320px"}}/>
      </div>
    )
  }
}
