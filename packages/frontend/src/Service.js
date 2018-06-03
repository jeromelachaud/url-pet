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
}
