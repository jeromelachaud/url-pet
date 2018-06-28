import React from 'react'
import { shallow } from 'enzyme'
import { List } from '../List'

const urls = []

it('renders correctly', () => {
  const tree = shallow(
    <List
      urls={urls}
    />
  )
  expect(tree).toMatchSnapshot()
})
