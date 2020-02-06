require('dotenv').config()
const request = require('supertest')
const app = require('../server')
const { generateHash } = require('../helpers/generateHash')

describe('Test the root path', () => {
  it('should response to a POST request with a 404', () => {
    return request(app)
      .post('/')
      .expect(404)
  })

  it('should response to a DELETE request with a 404', () => {
    return request(app)
      .post('/')
      .expect(404)
  })
})

describe('Test the url/create/ path', () => {
  it('should response to a GET request with a 404', () => {
    return request(app)
      .get('/url/create')
      .expect(404)
  })

  it('should response to a DELETE request with a 404', () => {
    return request(app)
      .delete('/url/create')
      .expect(404)
  })

  it('should response to POST request with a 201', () => {
    return request(app)
      .post('/url/create')
      .send({ url: `https://newly_created.com` })
      .expect(201)
  })

  xit('should response to an authorized POST request that has the same payload with a 409', () => {
    return request(app)
      .post('/url/create')
      .send({ url: `https://already_created.com` })
      .set('Authorization', `Bearer ${process.env.TOKEN_TEST}`)
      .expect(409)
  })

  it('should response to an authorized but empty POST request with a 500', () => {
    return request(app)
      .post('/url/create')
      .expect(500)
  })
})

describe('Test the url/delete/ path', () => {
  it('should response to a GET request with a 404', () => {
    return request(app)
      .get('/url/delete')
      .expect(404)
  })

  it('should response to a POST request with a 404', () => {
    return request(app)
      .post('/url/delete')
      .expect(404)
  })

  it('should response to an unauthorized POST request with a 401', async () => {
    return request(app)
      .delete('/url/delete')
      .expect(401)
  })

  it('should response to an authorized POST request with a 200', () => {
    return request(app)
      .delete('/url/delete')
      .send({ hash: 'p69Tn' })
      .set('Authorization', `Bearer ${process.env.TOKEN_TEST}`)
      .expect(200)
  })

  it('should response to an authorized but empty DELETE request with a 404', () => {
    return request(app)
      .delete('/url/delete')
      .set('Authorization', `Bearer ${process.env.TOKEN_TEST}`)
      .expect(404)
  })
})

describe('Test the url/list/ path', () => {
  it('should response to a DELETE request with a 404', () => {
    return request(app)
      .delete('/url/list')
      .expect(404)
  })

  it('should response to a POST request with a 401', () => {
    return request(app)
      .post('/url/list')
      .expect(404)
  })

  it('should response to an unauthorized GET request set with a 401', () => {
    return request(app)
      .get('/url/list')
      .expect(401)
  })

  it('It should response to an authorized GET request set with a 200', () => {
    return request(app)
      .get('/url/list')
      .set('Authorization', `Bearer ${process.env.TOKEN_TEST}`)
      .expect(200)
  })
})

describe('Test the /:hash path', () => {
  it('should response to a DELETE request with a 404', () => {
    return request(app)
      .delete(`/${generateHash()}`)
      .expect(404)
  })

  it('should response to a POST request with a 404', () => {
    return request(app)
      .post(`/${generateHash()}`)
      .expect(404)
  })

  it('should response to an GET request set with a 200', () => {
    return request(app)
      .get(`/n44rk`)
      .expect(301)
  })
})

describe('Test the /login route', () => {
  it('should response to a GET request with a 404', () => {
    return request(app)
      .get('/user/login')
      .expect(404)
  })

  it('should response to a DELETE request with a 404', () => {
    return request(app)
      .delete('/user/login')
      .expect(404)
  })

  it('should response to an unauthorized POST request with a 401', () => {
    return request(app)
      .post('/user/login')
      .expect(401)
  })

  it('should response to an authorized POST request with a 200', () => {
    return request(app)
      .post('/user/login')
      .send({
        name: `jerome`,
        pass: `admin`,
      })
      .expect(200)
  })
})
