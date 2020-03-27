import React, { Component } from 'react'
import './Header.scss'
import Logo from '../../assets/radio.svg'
import LightBulb from '../../assets/light-bulb.svg'
import PropTypes from 'prop-types'
import { client } from '../../Client'

import { ThemeContext } from '../../theme'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <header className="header" style={{ backgroundColor: theme.background }}>
            <div className="identity">
              <h1 style={{ color: theme.foreground }}>
                The <img id="logo" src={Logo} alt="app-logo" /> Child
              </h1>
            </div>
            <div className="header-end">
              <div className="end-item">
                {client.isLoggedIn() ? (
                  <Link className="ui item" to="/logout">
                    Logout
                  </Link>
                ) : (
                  <Link className="ui item" to="/login">
                    Login
                  </Link>
                )}
              </div>
              <div className="end-item">
                <img id="mode-toggle" alt="mode-switcher" src={LightBulb} />
              </div>
            </div>
          </header>
        )}
      </ThemeContext.Consumer>
    )
  }
}

Header.propTypes = {
  onThemeSwitch: PropTypes.func,
}

export default Header
