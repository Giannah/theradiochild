import React, { Component } from 'react'
import './Header.scss'
import Logo from '../../assets/retro-tv.svg'
import LightBulb from '../../assets/light-bulb.svg'
import PropTypes from 'prop-types'

import { ThemeContext } from '../../theme'

class Header extends Component {
  render () {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <header
            className="header"
            style={{ backgroundColor: theme.background }}
          >
            <div className='identity'>
              <h1
                style={{ color: theme.foreground }}
              >
               The <img id="logo" src={Logo} alt="app-logo" /> Child

              </h1>
            </div>
            <div className='header-end'>
              <img
                id="mode-toggle"
                alt="mode-switcher"
                src={LightBulb}
                onClick={this.props.onThemeSwitch}
              />
            </div>
          </header>
        )}
      </ThemeContext.Consumer>
    )
  }
}

Header.propTypes = {
  onThemeSwitch: PropTypes.func
}

export default Header
