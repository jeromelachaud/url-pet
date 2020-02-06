/* eslint-disable indent */
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8081',
})

export const Service = {
  minify({ payload }) {
    return instance({
      url: '/url/create',
      method: 'post',
      data: {
        url: payload,
      },
    })
      .then(response => response.data)
      .catch(error => error.response.data)
  },
  list(payload) {
    const { isAuth, token } = payload
    return isAuth
      ? instance({
          headers: { Authorization: `Bearer ${token}` },
          url: '/url/list',
          method: 'get',
        })
          .then(response => response.data)
          .catch(error => error.response.data)
      : false
  },
  delete(payload) {
    const { hash, token } = payload
    return instance({
      headers: { Authorization: `Bearer ${token}` },
      url: '/url/delete',
      method: 'delete',
      data: { hash },
    })
      .then(response => response.data)
      .catch(error => error.response.data)
  },
  login(payload) {
    return instance({
      url: '/user/login',
      method: 'post',
      data: payload,
    })
      .then(response => response)
      .catch(error => error.response.data)
  },
}
