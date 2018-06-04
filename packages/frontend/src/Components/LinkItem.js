import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DeleteLink from './DeleteLink'
import { Service } from '../Service'
import { Loader } from './Loader'
import './LinkItem.css'

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
      payload: hash,
    }).then(res => {
      this.setState({
        isLoading: false,
        message: res.message,
        isDeleted: true,
      })
    })
  }

  render() {
    const {
      url,
      hash,
      visit,
    } = this.props.link

    let DeleteLinkItemElement
    this.state.isLoading ? DeleteLinkItemElement = (<Loader />) : (
      DeleteLinkItemElement = (
        <DeleteLink
          handleClick={this.handleClick}
          hash={hash}/>
      )
    )

    let LinkItemElement
    const minifiedUrl = `http://localhost:8081/${hash}`
    !this.state.isDeleted ? LinkItemElement = (
      <tr
        className="LinkItem">
        <td>
          <a href={url}>{url}</a>
        </td>
        <td><a href={minifiedUrl}>{minifiedUrl}</a></td>
        <td className="center">{visit}</td>
        <td className="center">
          {DeleteLinkItemElement}
        </td>
      </tr>
    ) : LinkItemElement = null

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
