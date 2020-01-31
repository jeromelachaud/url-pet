import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

export const Button = props => (

  <button
    className="button"
    type="submit">
    {props.text}
  </button>

)

Button.propTypes = {
  text: PropTypes.string.isRequired,
}
