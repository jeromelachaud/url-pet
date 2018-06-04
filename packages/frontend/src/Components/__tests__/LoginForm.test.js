import React from 'react'
import { shallow } from 'enzyme'
import LoginForm from '../LoginForm'

const tree = shallow(
  <LoginForm />
)

it('renders correctly', () => {
  expect(tree).toMatchSnapshot()
})

it('should have a default isLoading state set to false', () => {
  expect(tree.state().isLoading).toBe(false)
})

it('should have a default name state set to an empty string', () => {
  expect(tree.state().name).toBe('')
})

it('should have a default pass state set to an empty string', () => {
  expect(tree.state().pass).toBe('')
})

it('should have a default message state set to an empty string', () => {
  expect(tree.state().message).toBe('')
})

it('should have a default isAuth state set to false', () => {
  expect(tree.state().isAuth).toBe(false)
})
