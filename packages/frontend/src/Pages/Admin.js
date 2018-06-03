import React, { Component } from 'react'
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
    Service.list()
      .then(response => {
        console.log(response)
        this.setState({
          isLoading: false,
          urls: response,
        })
      })
  }

  componentWillMount() {
    this.fetchData()
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Loader />
      )
    }

    return (
      <div
        className="App">
        <List
          urls={this.state.urls} />
      </div>
    )
  }
}
