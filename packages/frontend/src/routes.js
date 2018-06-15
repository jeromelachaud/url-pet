import React from 'react'
import { Route, Redirect, Switch } from 'react-router'

import { Login } from './Pages/Login'
import Admin from './Pages/Admin'
import { Home } from './Pages/Home'

export default (
  <Switch>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/admin" component={Admin}/>
    <Route exact path="/" component={Home}/>
    <Redirect to="/" />
  </Switch>
)
