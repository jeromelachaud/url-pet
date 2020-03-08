import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Admin } from './Pages/Admin'
import { Home } from './Pages/Home'
import { Login } from './Pages/Login'

export default (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/admin" component={Admin} />
    <Route exact path="/" component={Home} />
    <Redirect to="/" />
  </Switch>
)
