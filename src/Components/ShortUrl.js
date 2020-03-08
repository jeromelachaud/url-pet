import PropTypes from 'prop-types'
import React from 'react'
import './ShortUrl.css'

export const ShortUrl = ({ link, message }) => {
  return (
    <div className="short-url">
      <div className="short-url__message">{message}</div>
      <a
        className="short-url__link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link}
      </a>
    </div>
  )
}

ShortUrl.propTypes = {
  link: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}
