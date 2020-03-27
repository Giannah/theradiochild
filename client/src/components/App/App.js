import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import Login from '../Login/Login'
import Logout from '../Logout/Logout'
import Header from '../Header/Header'
import AlbumsContainer from '../AlbumsContainer/AlbumsContainer'

const App = () => (
  <Router>
    <div>
      <Header />
      <div className="spacer row" />
      <div className="row">
        <Switch>
          <PrivateRoute path="/albums" component={AlbumsContainer} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />

          <Route exact path="/" render={() => <Redirect to="/albums" />} />
        </Switch>
      </div>
    </div>
  </Router>
)

export default App
