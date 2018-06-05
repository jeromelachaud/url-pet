require('dotenv').config()
const request = require('supertest')
const app = require('../app')
const { generateHash } = require('../helper/generateHash')

describe('Test the root path', () => {
  it('should response to a GET request with a 404', () => {
    return request(app)
      .get('/')
      .expect(404)
  })

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

  it('should response to an unauthorized POST request with a 401', () => {
    return request(app)
      .post('/url/create')
      .expect(401)
  })

  it('should response to an authorized POST request with a 201', () => {
    return request(app)
      .post('/url/create')
      .send({ url: `http://${generateHash()}.fr/` })
      .set('Authorization', 'Basic amVyb21lOmFkbWlu')
      .expect(201)
  })

  xit('should response to an authorized POST request that has the same payload with a 409', () => {
    return request(app)
      .post('/url/create')
      .send({ url: `http://alreadysent.fr/` })
      .set('Authorization', 'Basic amVyb21lOmFkbWlu')
      .expect(409)
  })

  it('should response to an authorized but empty POST request with a 500', () => {
    return request(app)
      .post('/url/create')
      .set('Authorization', 'Basic amVyb21lOmFkbWlu')
      .expect(500)
  })
})

describe('Test the url/delete/ path', () => {
  it('should response to a GET request with a 404', () => {
    return request(app)
      .get('/url/delete')
      .expect(404)
  })

  it('should response to a POST request with a 401', () => {
    return request(app)
      .post('/url/delete')
      .expect(404)
  })

  it('should response to an unauthorized POST request with a 401', () => {
    return request(app)
      .delete('/url/delete')
      .expect(401)
  })

  xit('should response to an authorized POST request with a 200', () => {
    return request(app)
      .delete('/url/delete')
      .send({ url: `http://jeromelachaud.fr/` })
      .set('Authorization', 'Basic amVyb21lOmFkbWlu')
      .expect(200)
  })

  it('should response to an authorized but empty DELETE request with a 404', () => {
    return request(app)
      .delete('/url/delete')
      .set('Authorization', 'Basic amVyb21lOmFkbWlu')
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
      .set('Authorization', 'Basic amVyb21lOmFkbWlu')
      .expect(200)
  })
})

describe('Test the /:hash path', () => {
  it('should response to a DELETE request with a 404', () => {
    return request(app)
      .delete(`/${generateHash()}`)
      .expect(404)
  })

  it('should response to a POST request with a 401', () => {
    return request(app)
      .post(`/${generateHash()}`)
      .expect(404)
  })

  xit('should response to an GET request set with a 200', () => {
    return request(app)
      .get(`/${generateHash()}`)
      .expect(200)
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
