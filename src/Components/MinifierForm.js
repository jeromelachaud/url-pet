import React, { useState } from 'react'
import { Service } from '../Service'
import { Button } from './Button'
import { InputField } from './InputField'
import { Loader } from './Loader'
import { ShortUrl } from './ShortUrl'

export const MinifierForm = () => {
  const [isLoading, setLoading] = useState(false)
  const [shortUrl, setShortUrl] = useState('')
  const [message, setMessage] = useState('')
  const [query, setQuery] = useState('')

  const onSubmit = e => {
    e.preventDefault()
    setLoading(true)

    Service.minify({
      payload: query,
    }).then(res => {
      setLoading(false)
      setShortUrl(res.shortUrl)
      setMessage(res.message)
    })
  }

  let responseElement
  if (isLoading) {
    responseElement = <Loader />
  } else if (shortUrl === '') {
    responseElement = null
  } else {
    responseElement = (
      <div>
        <ShortUrl message={message} link={shortUrl} />
      </div>
    )
  }
  return (
    <form id="minifier-form" onSubmit={onSubmit}>
      <InputField
        type="url"
        id="url"
        htmlFor="url"
        labelText={false}
        placeholder="URL"
        ariaLabel="Enter the URL to minify"
        onChange={e => setQuery(e.target.value)}
      />
      <Button text="Minify this ☝️" />
      {responseElement}
    </form>
  )
}
