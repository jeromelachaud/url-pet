import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8081',
  headers: {'Authorization': 'Basic amVyb21lOmFkbWlu'},
})

export const Service = {
  minify({payload}) {
    console.log(payload)
    return instance({
      url: '/url/create',
      method: 'post',
      data: {
        url: payload,
      }})
      .then(response => response.data)
      .catch(error => error.response.data)
  },
  list() {
    return instance({
      url: '/url/list',
      method: 'get',
    })
      .then(response => response.data)
      .catch(error => error.response.data)
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
}
