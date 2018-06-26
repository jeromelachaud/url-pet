import React, { Component } from 'react'
import { InputField } from './InputField'
import { Button } from './Button'
import { Loader } from './Loader'
import { ShortUrl } from './ShortUrl'
import { Service } from '../Service'

export default class SubmitForm extends Component {
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
    }).then(res => {
      this.setState({
        isLoading: false,
        shortUrl: res.shortUrl,
        message: res.message,
      })
    })
  }

  render() {
    let responseElement
    if (this.state.isLoading) {
      responseElement = <Loader />
    } else if (this.state.shortUrl === '') {
      responseElement = null
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
          type="url"
          id="url"
          htmlFor="url"
          labelText="Enter the URL to minify"
          placeholder="URL"
          ariaLabel="Enter the URL to minify"
          onChange={this.onChangeQuery}/>
        <Button
          text="Minify this ☝️"/>
        {responseElement}
      </form>
    )
  }
}
