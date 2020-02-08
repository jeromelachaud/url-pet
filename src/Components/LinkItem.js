import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Service } from '../Service'
import DeleteLink from './DeleteLink'
import './LinkItem.css'
import { Loader } from './Loader'
export default class LinkItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      message: '',
      isDeleted: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(hash) {
    this.setState({
      isLoading: true,
    })
    Service.delete({
      hash,
      token: localStorage.getItem('token'),
    }).then(res => {
      this.setState({
        isLoading: false,
        message: res.message,
        isDeleted: true,
      })
    })
  }

  render() {
    const { url, hash, visit } = this.props.link

    let DeleteLinkItemElement
    this.state.isLoading
      ? (DeleteLinkItemElement = <Loader />)
      : (DeleteLinkItemElement = (
          <DeleteLink handleClick={this.handleClick} hash={hash} />
        ))

    let LinkItemElement
    const minifiedUrl = `${process.env.REACT_APP_HOST}/${hash}`
    !this.state.isDeleted
      ? (LinkItemElement = (
          <tr className="LinkItem">
            <td>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {url}
              </a>
            </td>
            <td>
              <a href={minifiedUrl} target="_blank" rel="noopener noreferrer">
                {minifiedUrl}
              </a>
            </td>
            <td className="center">{visit}</td>
            <td className="center">{DeleteLinkItemElement}</td>
          </tr>
        ))
      : (LinkItemElement = null)

    return LinkItemElement
  }
}

LinkItem.propTypes = {
  link: PropTypes.shape({
    url: PropTypes.string,
    hash: PropTypes.string,
    visit: PropTypes.integer,
  }),
}
