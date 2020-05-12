import React, { Component } from 'react'

import { Redirect } from 'react-router-dom'

import { client } from '../../Client'

import PropTypes from 'prop-types'

class Login extends Component {
  state = {
    loginInProgress: false,
    shouldredirect: false,
  }

  performLogic = () => {
    this.setState({ loginInProgress: true })
    client.login().then(() => this.setState({ shouldredirect: true }))
  }

  redirectPath = () => {
    const locationState = this.props.location.state
    const pathname = locationState && locationState.from && locationState.from.pathname

    return pathname || '/albums'
  }

  render() {
    const { shouldredirect, loginInProgress } = this.state
    if (shouldredirect) {
      return <Redirect to={this.redirectPath()} />
    } else {
      return (
        <div className="ui column centered grid">
          <div className="ten wide column">
            <div
              className="ui raised very padded text container segment"
              style={{ textAlign: 'center' }}
            >
              <h2 className="ui green header">The Radio Child</h2>
              {loginInProgress ? (
                <div className="ui active centered inline loader"></div>
              ) : (
                <div className="ui large green submit button" onClick={this.performLogic}>
                  Login
                </div>
              )}
            </div>
          </div>
        </div>
      )
    }
  }
}

Login.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.object,
    from: PropTypes.string,
    pathname: PropTypes.string,
  }).isRequired,
}

export default Login
