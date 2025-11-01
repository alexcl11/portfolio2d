import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Desktop from './components/Desktop/Desktop'

export default class Router extends Component {
  render() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Desktop/>} />
            </Routes>
        </BrowserRouter>
    )
  }
}
