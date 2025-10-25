require('dotenv').config()
// Ensure tests use the "test" environment so models/config pick the sqlite test DB
process.env.NODE_ENV = 'test'
const request = require('supertest')
const models = require('../models')
const app = require('../server')
const { generateHash } = require('../helpers/generateHash')

// Ensure test DB contains expected seeded rows so CI doesn't rely on a committed sqlite file.
beforeAll(async () => {
  // Recreate tables and insert the two rows used by tests
  await models.sequelize.sync({ force: true })
  await models.urls.bulkCreate([
    {
      id: '90b5c2d2-483f-4f9b-bad7-cd2f64bf4b04',
      url: 'https://already_created.com',
      hash: 'n44rk',
      visit: 0,
      createdAt: new Date('2020-01-01 10:00:00.45+00'),
      updatedAt: new Date('2020-01-01 11:00:00.45+00'),
    },
    {
      id: '64a30e50-4306-460d-8ae5-3b84273a4425',
      url: 'https://to_be_deleted.com',
      hash: 'p69Tn',
      visit: 0,
      createdAt: new Date('2020-02-01 10:00:00.45+00'),
      updatedAt: new Date('2020-02-01 11:00:00.45+00'),
    },
  ])
})

afterAll(async () => {
  await models.sequelize.close()
})

describe('Test the root path', () => {
  it('should response to a POST request with a 404', () => {
    return request(app).post('/').expect(404)
  })

  it('should response to a DELETE request with a 404', () => {
    return request(app).post('/').expect(404)
  })
})

describe('Test the url/create/ path', () => {
  it('should response to a GET request with a 404', () => {
    return request(app).get('/url/create').expect(404)
  })

  it('should response to a DELETE request with a 404', () => {
    return request(app).delete('/url/create').expect(404)
  })

  it('should response to POST request with a 201', () => {
    return request(app)
      .post('/url/create')
      .send({ url: `https://newly_created.com` })
      .expect(201)
  })

  it('should response to an authorized but empty POST request with a 500', () => {
    return request(app).post('/url/create').expect(500)
  })
})

describe('Test the url/delete/ path', () => {
  it('should response to a GET request with a 404', () => {
    return request(app).get('/url/delete').expect(404)
  })

  it('should response to a POST request with a 404', () => {
    return request(app).post('/url/delete').expect(404)
  })

  it('should response to an unauthorized POST request with a 401', async () => {
    return request(app).delete('/url/delete').expect(401)
  })

  it('should response to an authorized POST request with a 200', () => {
    return request(app)
      .delete('/url/delete')
      .send({ hash: 'p69Tn' })
      .set('Authorization', `Bearer ${process.env.TOKEN_TEST}`)
      .expect(200)
  })

  it('should response to an authorized but empty DELETE request with a 500', () => {
    return request(app)
      .delete('/url/delete')
      .set('Authorization', `Bearer ${process.env.TOKEN_TEST}`)
      .expect(500)
  })
})

describe('Test the url/list/ path', () => {
  it('should response to a DELETE request with a 404', () => {
    return request(app).delete('/url/list').expect(404)
  })

  it('should response to a POST request with a 401', () => {
    return request(app).post('/url/list').expect(404)
  })

  it('should response to an unauthorized GET request set with a 401', () => {
    return request(app).get('/url/list').expect(401)
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
    return request(app).delete(`/${generateHash()}`).expect(404)
  })

  it('should response to a POST request with a 404', () => {
    return request(app).post(`/${generateHash()}`).expect(404)
  })

  it('should response to an GET request set with a 200', () => {
    return request(app).get(`/n44rk`).expect(301)
  })
})

describe('Test the /login route', () => {
  it('should response to a GET request with a 404', () => {
    return request(app).get('/user/login').expect(404)
  })

  it('should response to a DELETE request with a 404', () => {
    return request(app).delete('/user/login').expect(404)
  })

  it('should response to an unauthorized POST request with a 401', () => {
    return request(app).post('/user/login').expect(401)
  })

  it('should response to an authorized POST request with a 200', () => {
    return request(app)
      .post('/user/login')
      .send({
        name: `${process.env.ADMIN_USERNAME}`,
        pass: `${process.env.ADMIN_PASSWORD}`,
      })
      .expect(200)
  })
})
