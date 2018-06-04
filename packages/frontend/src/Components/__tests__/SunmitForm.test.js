import React from 'react'
import { shallow } from 'enzyme'
import SubmitForm from '../SubmitForm'

const tree = shallow(
  <SubmitForm/>
)

it('renders correctly', () => {
  expect(tree).toMatchSnapshot()
})

it('should have a default isLoading state set to false', () => {
  expect(tree.state().isLoading).toBe(false)
})

it('should have a default shortUrl state set to an empty string', () => {
  expect(tree.state().shortUrl).toBe('')
})

it('should have a default message state set to an empty string', () => {
  expect(tree.state().message).toBe('')
})

it('should have a default query state set to be an empty string', () => {
  expect(tree.state().query).toBe('')
})
