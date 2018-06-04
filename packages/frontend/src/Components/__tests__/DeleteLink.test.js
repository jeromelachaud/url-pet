import React from 'react'
import { shallow } from 'enzyme'
import DeleteLink from '../DeleteLink'

const handleClick = function () { }
const hash = 'string'

it('renders correctly', () => {
  const tree = shallow(
    <DeleteLink
      handleClick={handleClick}
      hash={hash}
    />
  )
  expect(tree).toMatchSnapshot()
})
