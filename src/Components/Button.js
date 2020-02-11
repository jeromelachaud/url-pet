import PropTypes from 'prop-types'
import React from 'react'
import './Button.css'

export const Button = props => (
  <button id="button" className="button" type="submit">
    {props.text}
  </button>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
}
