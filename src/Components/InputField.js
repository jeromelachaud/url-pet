import PropTypes from 'prop-types'
import React from 'react'
import './InputField.css'
import { Label } from './Label'

export const InputField = props => (
  <div>
    <Label id={props.id} htmlFor={props.htmlFor} text={props.labelText} />

    <input
      required
      size="80"
      type={props.type}
      aria-label={props.ariaLabel}
      id={props.id}
      className="input-field"
      placeholder={props.placeholder}
      onChange={props.onChange}
    ></input>
  </div>
)

InputField.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
}
