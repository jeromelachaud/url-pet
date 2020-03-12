import React, { useEffect } from 'react'

export const ThemeSwitcher = () => {
  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.toggle(localStorage.getItem('theme'))
    }

    const themeSwitcher = document.getElementById('theme-switcher')

    themeSwitcher.addEventListener('click', function() {
      document.body.classList.toggle('dark')
      localStorage.setItem('theme', document.body.classList)
    })
  })

  return <button id="theme-switcher">Switch theme!</button>
}
