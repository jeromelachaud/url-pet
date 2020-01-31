import React from 'react'
import PropTypes from 'prop-types'
import './DeleteLink.css'

const DeleteLink = ({hash, handleClick}) => {
  return (
    <span
      className="DeleteLink"
      onClick={() => handleClick(hash)}>
    </span>
  )
}

DeleteLink.propTypes = {
  handleClick: PropTypes.func,
  hash: PropTypes.string,
}

export default DeleteLink
