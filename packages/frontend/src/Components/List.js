import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LinkItem from './LinkItem'
import './List.css'

export default class Grid extends Component {
  render() {
    const {
      urls,
    } = this.props
    const listElement = urls.map((link, i) => (
      <LinkItem
        key={i}
        link={link}>
      </LinkItem>
    ))

    return (
      <div className="List">
        <table>
          <tbody>
            <tr>
              <th>Original URL</th>
              <th>Minified URL</th>
              <th>Number of visits</th>
              <th>Delete URL</th>
            </tr>
            {listElement}
          </tbody>
        </table>
      </div>
    )
  }
}

Grid.propTypes = {
  urls: PropTypes.array.isRequired,
}
