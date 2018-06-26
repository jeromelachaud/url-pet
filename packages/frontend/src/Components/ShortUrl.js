import React from 'react'
import PropTypes from 'prop-types'
import './ShortUrl.css'

export const ShortUrl = ({link, message}) => (
  <div
    className="short-url">
    <div
      className="short-url__message">
      {message}
    </div>
    <a
      className="short-url__link"
      href={link}
      target="_blank">
      {link}
    </a>
  </div>
)

ShortUrl.propTypes = {
  link: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}
