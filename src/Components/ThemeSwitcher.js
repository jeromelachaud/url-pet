import React, { useEffect, useState } from 'react'
import useSound from 'use-sound'
import switchOffSound from './sounds/switch-off.mp3'
import switchOnSound from './sounds/switch-on.mp3'
import './ThemeSwitcher.css'

export const ThemeSwitcher = () => {
  function useDarkMode() {
    const preferDarkQuery = '(prefers-color-scheme: dark)'
    const [mode, setMode] = useState(
      () =>
        window.localStorage.getItem('colorMode') ||
        (window.matchMedia(preferDarkQuery).matches ? 'dark' : 'light')
    )
    useEffect(() => {
      const mediaQuery = window.matchMedia(preferDarkQuery)
      const handleChange = () => setMode(mediaQuery.matches ? 'dark' : 'light')
      mediaQuery.addListener(handleChange)
      return () => mediaQuery.removeListener(handleChange)
    }, [])
    useEffect(() => {
      document.documentElement.setAttribute('data-theme', mode)
      window.localStorage.setItem('colorMode', mode)
    }, [mode])
    return [mode, setMode]
  }

  const [switchOn] = useSound(switchOnSound, { volume: 0.25 })
  const [switchOff] = useSound(switchOffSound, { volume: 0.25 })

  const [mode, setMode] = useDarkMode()

  return (
    <button
      className="theme-switcher"
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      onMouseUp={() => {
        mode === 'dark' ? switchOff() : switchOn()
      }}
    >
      <span role="img" aria-label="theme-switcher">
        {mode === 'dark' ? '🌚' : '🌞'}
      </span>
    </button>
  )
}
