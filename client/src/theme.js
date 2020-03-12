import React from 'react'

export const themes = {
  light: {
    foreground: '#666699',
    background: '#fff'
  },
  dark: {
    foreground: '#fff',
    background: '#404040'
  }
}

export const ThemeContext = React.createContext(themes.dark)
