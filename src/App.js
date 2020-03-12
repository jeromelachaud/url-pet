import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Header } from './Components/Header'
import { ThemeSwitcher } from './Components/ThemeSwitcher'
import routes from './routes'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <ThemeSwitcher />
        <Header />
        {routes}
      </div>
    </BrowserRouter>
  )
}

export default App
