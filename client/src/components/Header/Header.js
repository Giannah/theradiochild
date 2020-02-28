import React, { Component } from 'react'
import './Header.scss'
import Logo from '../../assets/retro-tv.svg'
import Sun from '../../assets/sun.svg'
import PropTypes from 'prop-types'

// import { ThemeContext } from '../../theme'

class Header extends Component {
  render () {
    return (
      <header
        className="header"
      >
        <div className='identity'>
          <h1>
        The TV child
            <img id="logo" src={Logo} alt="app-logo" />
          </h1>
        </div>
        <div className='header-end'>
          <img
            id="mode-toggle"
            alt="mode-switcher"
            src={Sun}
            onClick={this.props.onThemeSwitch}
          />
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  onThemeSwitch: PropTypes.func
}

export default Header
