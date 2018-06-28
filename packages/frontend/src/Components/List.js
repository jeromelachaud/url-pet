import React from 'react'
import PropTypes from 'prop-types'
import LinkItem from './LinkItem'
import './List.css'

export const List = ({urls}) => {
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

List.propTypes = {
  urls: PropTypes.array.isRequired,
}
