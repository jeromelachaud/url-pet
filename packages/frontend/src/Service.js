import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8081',
  headers: {'Authorization': 'Basic amVyb21lOmFkbWlu'},
})

export const Service = {
  minify({payload}) {
    return instance({
      url: '/url/create',
      method: 'post',
      data: {
        url: payload,
      }})
      .then(response => response.data)
      .catch(error => error.response.data)
  },
  list(isAuth) {
    return isAuth ? (
      instance({
        url: '/url/list',
        method: 'get',
      })
        .then(response => response.data)
        .catch(error => error.response.data)
    ) : false
  },
  delete({payload}) {
    return instance({
      url: '/url/delete',
      method: 'delete',
      data: {
        hash: payload,
      }})
      .then(response => response.data)
      .catch(error => error.response.data)
  },
  login(payload) {
    return instance({
      url: '/user/login',
      method: 'post',
      headers: { 'Authorization': '' },
      data: payload,
    })
      .then(response => response.status)
      .catch(error => error.response.data)
  },
}
