import React from 'react'
import { shallow } from 'enzyme'
import ShortUrl from '../ShortUrl'

const link = 'string'
const message = 'string'

it('renders correctly', () => {
  const tree = shallow(
    <ShortUrl
      link={link}
      message={message}
    />
  )
  expect(tree).toMatchSnapshot()
})
