require('dotenv').config()
const config = require('../config/config')
const { generateUrl } = require('../helper/generateUrl')

describe('Test the generateUrl helper fonction', () => {
  const hash = 'hash'
  it('should generate a URL that match the right pattern', () => {
    expect(generateUrl(hash))
      .toBe(`http://${config.host}:${config.port}/${hash}`)
  })
})
