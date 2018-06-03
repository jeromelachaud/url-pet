import React from 'react'
import { Route, Redirect, Switch } from 'react-router'

import Home from './Pages/Home'
import Admin from './Pages/Admin'

export default (
  <Switch>
    <Route exact path="/admin" component={Admin}/>
    <Route exact path="/" component={Home}/>
    <Redirect to="/" />
  </Switch>
)
