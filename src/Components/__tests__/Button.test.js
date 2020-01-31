import React from 'react'
import { shallow } from 'enzyme'
import { Button } from '../Button'

const text = 'string'

it('renders correctly', () => {
  const tree = shallow(
    <Button
      text={text}
    />
  )
  expect(tree).toMatchSnapshot()
})
