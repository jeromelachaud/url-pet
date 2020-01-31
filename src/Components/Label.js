import React from 'react'
import PropTypes from 'prop-types'
import './Label.css'

export const Label = props => {
  const {
    htmlFor,
    text,
  } = props

  return (
    <label
      htmlFor={htmlFor}>
      {text}
    </label>
  )
}

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
