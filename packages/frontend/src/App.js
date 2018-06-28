import React from 'react'
import { Header } from './Components/Header'
import { BrowserRouter } from 'react-router-dom'

import './App.css'

import routes from './routes'

export const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      {routes}
    </div>
  </BrowserRouter>
)
