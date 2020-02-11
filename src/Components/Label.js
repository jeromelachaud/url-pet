import PropTypes from 'prop-types'
import React from 'react'
import './Label.css'

export const Label = props => {
  const { htmlFor, text, id } = props

  return (
    <label id={id} htmlFor={htmlFor}>
      {text}
    </label>
  )
}

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
