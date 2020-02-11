import PropTypes from 'prop-types'
import React, { Component } from 'react'
import List from '../Components/List'
import { Loader } from '../Components/Loader'
import { Service } from '../Service'

export default class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      urls: [],
    }
  }

  getTokenFromLocalStorage() {
    return localStorage.getItem('token')
  }

  fetchData() {
    Service.list({
      token: this.getTokenFromLocalStorage(),
    }).then(response => {
      this.setState({
        isLoading: false,
        urls: response,
      })
    })
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    const { history } = this.props
    this.getTokenFromLocalStorage() ? this.fetchData() : history.push('/login')
  }

  render() {
    if (this.state.isLoading) {
      return <Loader />
    }

    return <List urls={this.state.urls} />
  }
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
