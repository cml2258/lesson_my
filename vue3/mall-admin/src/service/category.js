import axios from './config.js'

export const getCategoryData = (params) => {
  return axios.get('/categories', params)
}