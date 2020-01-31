import React, { Component } from 'react'
import PropTypes from 'prop-types'
import List from '../Components/List'
import { Service } from '../Service'
import { Loader } from '../Components/Loader'

export default class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      urls: [],
    }
  };

  fetchData() {
    Service.list({
      isAuth: this.props.location.state,
    })
      .then(response => {
        this.setState({
          isLoading: false,
          urls: response,
        })
      })
  }

  componentWillMount() {
    const {
      location,
      history,
    } = this.props

    location.state ? this.fetchData() : history.push('/login')
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Loader />
      )
    }

    return (
      <List
        urls={this.state.urls} />
    )
  }
}

Admin.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.bool,
  }),
  history: PropTypes.shape({
    history: PropTypes.func,
  }),
}
