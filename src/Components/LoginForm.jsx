import { useState } from 'react'
import { Navigate } from 'react-router'
import { Button } from './Button'
import { InputField } from './InputField'
import { Loader } from './Loader'
import { Service } from '../Service'
import './LoginForm.css'

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isAuth, setIsAuth] = useState(false)
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')
  const [message, setMessage] = useState('')

  const onChangeLogin = e => {
    setName(e.target.value)
  }

  const onChangePassword = e => {
    setPass(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    setIsLoading(true)
    Service.login({
      name,
      pass,
    }).then(res => {
      setIsLoading(true)
      const token = res.data
      localStorage.setItem('token', token)
      setIsAuth(res.status === 200)
      setIsLoading(false)
      setMessage(res.message)
    })
  }

  let messageElement
  if (isLoading) {
    messageElement = <Loader />
  } else if (message === '') {
    messageElement = null
  } else {
    messageElement = <div className="LoginForm__message">{message}</div>
  }

  return (
    <div>
      <form onSubmit={onSubmit} id="login-form">
        <InputField
          id="username"
          htmlFor="username"
          type="text"
          placeholder="username"
          labelText="Enter your username"
          ariaLabel="Enter your username"
          onChange={onChangeLogin}
        />
        <InputField
          id="password"
          htmlFor="password"
          type="password"
          placeholder="password"
          labelText="Enter your password"
          ariaLabel="Enter your password"
          onChange={onChangePassword}
        />
        <Button text="Let me in 🔓" />
        {messageElement}
      </form>
      {isAuth && (
        <Navigate
          to={{
            pathname: '/admin',
            state: isAuth,
          }}
        />
      )}
    </div>
  )
}
