import React from 'react'
import { shallow } from 'enzyme'
import { InputField } from '../InputField'

const onChange = function () { }
const type = 'string'
const ariaLabel = 'string'
const placeholder = 'string'
const htmlFor = 'string'
const id = 'string'
const labelText = 'string'
const text = 'string'

it('renders correctly', () => {
  const tree = shallow(
    <InputField
      onChange={onChange}
      type={type}
      ariaLabel={ariaLabel}
      placeholder={placeholder}
      htmlFor={htmlFor}
      id={id}
      labelText={labelText}
      text={text}
    />
  )
  expect(tree).toMatchSnapshot()
})
