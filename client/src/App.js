import React, { Component } from 'react'

import { ThemeContext, themes } from './theme'
import Header from './components/Header/Header'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      theme: themes.dark
    }

    this.switchTheme = this.switchTheme.bind(this)
  }

  switchTheme () {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark
    }))
  }

  render () {
    return (
      <div className="App">
        <ThemeContext.Provider value={this.state.theme}>
          <Header
            onThemeSwitch={this.switchTheme}
          />
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default App
