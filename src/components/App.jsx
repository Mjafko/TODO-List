import React, { Component } from 'react'


import Header from './header/Header'
import Input from './input/Input'


export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Input />
      </div>
    )
  }
}
