import React, { Component } from 'react'
import { Header } from './Components/Header'
import { BrowserRouter } from 'react-router-dom'

import './App.css'
import './index.css'

import routes from './routes'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          {routes}
        </div>
      </BrowserRouter>
    )
  }
}

export default App
