import axios from 'axios'

// 默认前缀
axios.defaults.baseURL = 'http://localhost:3000'
// 响应拦截
axios.interceptors.response.use(data => {
  return data.data
})

export default axios