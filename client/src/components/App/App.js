import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import MainContainer from '../MainContainer/MainContainer'
import Login from '../Login/Login'

const App = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route path='/home' component={MainContainer}/>
        <Route exact path='/' render={() => (
          <Redirect
            to='/home'
          />
        )} />
        <Route path='/login' component={Login}/>
      </Switch>

    </div>
  </Router>

)

export default App
