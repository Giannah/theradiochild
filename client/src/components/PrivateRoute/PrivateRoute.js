import React from 'react'

import { Route, Redirect } from 'react-router-dom'

import { client } from '../../Client'

import PropTypes from 'prop-types'

const PrivateRoute = ({ component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      client.isLoggedIn() ? (
        React.createElement(component, props)
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    }
  />
)

PrivateRoute.propTypes = {
  component: PropTypes.func,
  location: PropTypes.object,
}

export default PrivateRoute
