import React, { useEffect } from 'react'
import './ThemeSwitcher.css'

export const ThemeSwitcher = () => {
  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.toggle(localStorage.getItem('theme'))
    }

    const themeSwitcher = document.getElementById('theme-switcher')

    themeSwitcher.addEventListener('click', () => {
      document.body.classList.toggle('dark')
      localStorage.setItem('theme', document.body.classList)
    })
  })

  return (
    <button id="theme-switcher">
      <span role="img" aria-label="theme-switcher">
        🌓
      </span>
    </button>
  )
}
