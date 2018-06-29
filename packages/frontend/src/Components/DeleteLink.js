import React from 'react'
import PropTypes from 'prop-types'
import './DeleteLink.css'

export const DeleteLink = ({hash, handleClick}) => (
  <span
    className="DeleteLink"
    onClick={() => handleClick(hash)}>
  </span>
)

DeleteLink.propTypes = {
  handleClick: PropTypes.func,
  hash: PropTypes.string,
}
