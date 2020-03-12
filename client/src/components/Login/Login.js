import React, { Component } from 'react'

class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loginInProgress: false
    }
  }

  render () {
    return (
      <div className='ui one column centered grid'>
        <div className='ten wide column'>
          <div
            className='ui raised very padded text container segment'
            style={{ textAlign: 'center' }}
          >
            <h2 className='ui green header'>
              The TV Child
            </h2>
            {
              this.state.loginInProgress ? (
                <div className='ui active centered inline loader' />
              ) : (
                <div
                  className='ui large green submit button'
                >
                  Login
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Login
