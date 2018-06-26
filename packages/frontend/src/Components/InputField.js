import React from 'react'
import { Label } from './Label'
import PropTypes from 'prop-types'
import './InputField.css'

export const InputField = props => {
  const {
    htmlFor,
    labelText,
    type,
    ariaLabel,
    id,
    placeholder,
    onChange,
  } = props

  return (
    <div>
      <Label
        htmlFor={htmlFor}
        text={labelText}/>

      <input
        required
        size="80"
        type={type}
        aria-label={ariaLabel}
        id={id}
        className="input-field"
        placeholder={placeholder}
        onChange={onChange}>
      </input>
    </div>
  )
}

InputField.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
}
