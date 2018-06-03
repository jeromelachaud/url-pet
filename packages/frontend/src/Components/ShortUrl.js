import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ShortUrl.css'

export default class ShortUrl extends Component {
  render() {
    const {
      link,
      message,
    } = this.props
    console.log(link)
    return (
      <div
        className="short-url">
        <div
          className="short-url__message">
          {message}
        </div>
        <a
          className="short-url__link"
          href={link}>
          {link}
        </a>
      </div>
    )
  }
}

ShortUrl.defaultProps = {
  link: '',
  message: '',
}

ShortUrl.propTypes = {
  link: PropTypes.string,
  message: PropTypes.string,
}
