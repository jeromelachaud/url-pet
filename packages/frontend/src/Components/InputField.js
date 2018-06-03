import React from 'react'
import { Label } from './Label'
import PropTypes from 'prop-types'
import './InputField.css'

export const InputField = props => (
  <div>
    <Label
      htmlFor="InputField"
      text="Enter the URL to minify"/>

    <input
      required
      size="80"
      type="url"
      aria-label="Enter the URL to minify"
      id="InputField"
      className="input-field"
      placeholder="URL"
      onChange={props.onChange}>
    </input>
  </div>

)

InputField.propTypes = {
  onChange: PropTypes.func,
}
