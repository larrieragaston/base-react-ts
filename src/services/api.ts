import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 1000 * 15, // 15 sec
})

api.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => Promise.reject(error) // Do something with request error
)

api.interceptors.response.use(
  (response) => response.data, // Do something with response data
  (error) =>
    // Do something with response error
    Promise.reject(console.log(error))
)

export default api
