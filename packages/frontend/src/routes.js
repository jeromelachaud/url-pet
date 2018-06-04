import React from 'react'
import { Route, Redirect, Switch } from 'react-router'

import Home from './Pages/Home'
import Admin from './Pages/Admin'
import Login from './Pages/Login'

export default (
  <Switch>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/admin" component={Admin}/>
    <Route exact path="/" component={Home}/>
    <Redirect to="/" />
  </Switch>
)
