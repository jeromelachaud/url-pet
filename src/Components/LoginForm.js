import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Button } from '../Components/Button'
import { InputField } from '../Components/InputField'
import { Loader } from '../Components/Loader'
import { Service } from '../Service'
import './LoginForm.css'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      name: '',
      pass: '',
      message: '',
      isAuth: false,
    }

    this.onChangeLogin = this.onChangeLogin.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChangeLogin(event) {
    this.setState({
      name: event.target.value,
    })
  }

  onChangePassword(event) {
    this.setState({
      pass: event.target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault()
    this.setState({
      isLoading: true,
    })
    Service.login({
      name: this.state.name,
      pass: this.state.pass,
    }).then(res => {
      const token = res.data
      localStorage.setItem('token', token)
      this.setState({
        isLoading: false,
        isAuth: res.status === 200,
        message: res.message,
      })
    })
  }

  render() {
    let messageElement
    if (this.state.isLoading) {
      messageElement = <Loader />
    } else if (this.state.message === '') {
      messageElement = null
    } else {
      messageElement = (
        <div className="LoginForm__message">{this.state.message}</div>
      )
    }

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <InputField
            id="username"
            htmlFor="username"
            type="text"
            placeholder="login"
            labelText="Enter your username"
            ariaLabel="Enter your username"
            onChange={this.onChangeLogin}
          />
          <InputField
            id="password"
            htmlFor="password"
            type="password"
            placeholder="password"
            labelText="Enter your password"
            ariaLabel="Enter your password"
            onChange={this.onChangePassword}
          />
          <Button text="Let me in 🔓" />
          {messageElement}
        </form>
        {this.state.isAuth && (
          <Redirect
            to={{
              pathname: '/admin',
              state: this.state.isAuth,
            }}
          />
        )}
      </div>
    )
  }
}

export default LoginForm
