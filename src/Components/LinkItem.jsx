import PropTypes from 'prop-types'
import { useState } from 'react'
import { Service } from '../Service'
import { DeleteLink } from './DeleteLink'
import './LinkItem.css'
import { Loader } from './Loader'

export const LinkItem = ({ link }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false)

  const handleClick = hash => {
    setIsLoading(true)
    Service.delete({
      hash,
      token: localStorage.getItem('token'),
    }).then(res => {
      setIsLoading(res === 'OK')
      setIsDeleted(res === 'OK')
    })
  }

  let DeleteLinkItemElement
  const { url, hash, visit } = link
  console.log('LinkItem -> url, hash, visit', url, hash, visit)
  isLoading
    ? (DeleteLinkItemElement = <Loader />)
    : (DeleteLinkItemElement = (
        <DeleteLink handleClick={handleClick} hash={hash} />
      ))

  let LinkItemElement
  const minifiedUrl = `${import.meta.env.VITE_REACT_APP_HOST}/${hash}`
  !isDeleted
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
          <td className="center visit">{visit}</td>
          <td className="center">{DeleteLinkItemElement}</td>
        </tr>
      ))
    : (LinkItemElement = null)

  return LinkItemElement
}

LinkItem.propTypes = {
  link: PropTypes.shape({
    url: PropTypes.string,
    hash: PropTypes.string,
    visit: PropTypes.integer,
  }),
}
