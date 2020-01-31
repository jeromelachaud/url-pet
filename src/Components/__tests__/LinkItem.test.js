import React from 'react'
import { shallow } from 'enzyme'
import LinkItem from '../LinkItem'

const link = {}
const url = 'string'
const hash = 'string'
const visit = 1

const tree = shallow(
  <LinkItem
    link={link}
    url={url}
    hash={hash}
    visit={visit}
  />
)

it('renders correctly', () => {
  expect(tree).toMatchSnapshot()
})

it('should have a default isLoading state set to false', () => {
  expect(tree.state().isLoading).toBe(false)
})

it('should have a default message state set to an empty string', () => {
  expect(tree.state().message).toBe('')
})

it('should have a default isDeleted state set to false', () => {
  expect(tree.state().isDeleted).toBe(false)
})
