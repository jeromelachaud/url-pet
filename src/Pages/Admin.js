import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { List } from '../Components/List'
import { Loader } from '../Components/Loader'
import { Service } from '../Service'

export const Admin = ({ history }) => {
  const [isLoading, setLoading] = useState(true)
  const [urls, setUrls] = useState([])

  const getTokenFromLocalStorage = () => {
    return localStorage.getItem('token')
  }

  useEffect(() => {
    const fetchData = () => {
      Service.list({
        token: getTokenFromLocalStorage(),
      }).then(response => {
        setLoading(false)
        setUrls(response)
      })
    };
    getTokenFromLocalStorage() ? fetchData() : history.push('/login')
  }, [history])

  return isLoading ? <Loader /> : <List urls={urls} />
}

Admin.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.bool,
  }),
  history: PropTypes.shape({
    history: PropTypes.func,
    push: PropTypes.func,
  }),
}
