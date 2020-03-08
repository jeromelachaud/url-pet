import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Header } from './Components/Header'
import routes from './routes'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {routes}
      </div>
    </BrowserRouter>
  )
}

export default App
