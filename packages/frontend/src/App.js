import React, { Component } from 'react'
import { Header } from './Components/Header'
import Form from './Components/Form'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
      </div>
    )
  }
}

export default App
