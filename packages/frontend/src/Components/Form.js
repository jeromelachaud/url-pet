import React, { Component } from 'react'
import { InputField } from './InputField'
import { Button } from './Button'
import { Loader } from './Loader'
import ShortUrl from './ShortUrl'
import { Service } from '../Service'
import './Form.css'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      shortUrl: '',
      message: '',
      query: '',
    }

    this.onChangeQuery = this.onChangeQuery.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChangeQuery(event) {
    this.setState({
      query: event.target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault()
    this.setState({
      isLoading: true,
    })
    Service.minify({
      payload: this.state.query,
    })
      .then(response => {
        this.setState({
          isLoading: false,
          shortUrl: response.shortUrl,
          message: response.message,
        })
      })
  }

  render() {
    let responseElement
    if (this.state.shortUrl === '') {
      responseElement = null
    } else if (this.state.isLoading) {
      responseElement = (<Loader />)
    } else {
      responseElement = (
        <div>
          <ShortUrl
            message={this.state.message}
            link={this.state.shortUrl}/>
        </div>
      )
    }

    return (
      <form
        onSubmit={this.onSubmit}>
        <InputField
          onChange={this.onChangeQuery}/>
        <Button/>
        {responseElement}
      </form>
    )
  }
}
