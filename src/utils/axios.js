import axios from 'axios'
import adapter from 'axios-miniprogram-adapter'

if (process.env.NODE_ENV === 'development') {
  console.log('开发环境')
} else {
  console.log('生产环境')
}
const service = axios.create({
  baseURL: 'https://dataapi.joinquant.com/apis',
  adapter
})

// 请求拦截器
service.interceptors.request.use(
  function(config) {
    return config
  },
  function(err) {
    return Promise.reject(err)
  }
)

// 响应拦截器
service.interceptors.response.use(
  function(res) {
    return res.data
  },
  function(err) {
    return Promise.reject(err)
  }
)

export default service
