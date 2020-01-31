import React from 'react'
import { shallow } from 'enzyme'
import { Label } from '../Label'

const htmlFor = 'string'
const text = 'string'

it('renders correctly', () => {
  const tree = shallow(
    <Label
      htmlFor={htmlFor}
      text={text}
    />
  )
  expect(tree).toMatchSnapshot()
})
