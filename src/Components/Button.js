import PropTypes from 'prop-types'
import React from 'react'
import './Button.css'

export const Button = ({ text }) => (
  <button id="button" className="button" type="submit">
    {text}
  </button>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
}
