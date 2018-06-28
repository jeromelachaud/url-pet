import React from 'react'
import { shallow } from 'enzyme'
import { Header } from './Components/Header'
import { App } from './App'

const tree = shallow(
  <App />
)

it('renders correctly', () => {
  expect(tree).toMatchSnapshot()
})

it('must contain an <Header /> component', () => {
  const header = <Header/>
  expect(tree).toContainReact(header)
})
