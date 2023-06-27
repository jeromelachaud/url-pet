import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { Admin } from './Pages/Admin'
import { Home } from './Pages/Home'
import { Login } from './Pages/Login'

export default (
  <Routes>
    <Route exact path="/login" component={Login} />
    <Route exact path="/admin" component={Admin} />
    <Route exact path="/" component={Home} />
    <Navigate to="/" />
  </Routes>
)
