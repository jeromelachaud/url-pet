import { Outlet } from 'react-router'
import { ThemeSwitcher } from '../Components/ThemeSwitcher'
import { Header } from '../Components/Header'
import React from 'react'

export function Main() {
  return (
    <div className="App">
      <ThemeSwitcher />
      <Header />
      <Outlet />
    </div>
  )
}
