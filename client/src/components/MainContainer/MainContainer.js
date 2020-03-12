import React, { Component } from 'react'
import { ThemeContext, themes } from '../../theme'
import Header from '../Header/Header'
import VerticalMenu from '../VerticalMenu/VerticalMenu'
import ListContainer from '../ListContainer/ListContainer'

class MainContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      theme: themes.dark,
      lists: {}
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
      <ThemeContext.Provider value={this.state.theme}>
        <Header
          onThemeSwitch={this.switchTheme}
        />
        <VerticalMenu />
        <ListContainer />
      </ThemeContext.Provider>
    )
  }
}

export default MainContainer
