import Fly from 'flyio/dist/npm/wx'
import whiteList from './whiteList'

const fly = new Fly()
// 设置超时
fly.config.timeout = 20000
// 添加请求拦截器
fly.interceptors.request.use((request) => {
  // 不加载页面的接口
  if (whiteList.loading.indexOf(request.url) === -1) {
    wx.hideLoading()
  }
  wx.showLoading({
    'title': '加载中',
    'mask': true
  })
  // 请求资源服务器时， 不添加token
  if (whiteList.nullHeaderToken.indexOf(request.url) !== -1) {
    request.timeout = 30000 // 请求超时
    request.headers = {
      'content-type': 'application/json',
      'X-Tag': 'flyio'
    }
    return request
  }
  const Authorization = wx.getStorageSync('authorization')
  // 延迟发请求 等getStorageSync 存储
  setTimeout(() => {
    // 无token 跳转登陆页
    if (Authorization) {
      request.timeout = 30000
      request.headers = {
        'content-type': 'application/json',
        'X-Tag': 'flyio',
        'Authorization': 'Bearer ' + Authorization
      }
    } else {
      console.log('没有token跳转登录')
      setTimeout(() => {
        wx.redirectTo({
          url: '/pages/login'
        })
      }, 300)
    }
    return request
  }, 300)
}, (error, promise) => {
  console.log(222)
  console.log(error)
  promise.reject(error)
})
// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use((response) => {
  wx.hideLoading()
  console.log('interceptors数据', response.data)
  // 只将请求结果的data字段返回
  return response.data
}, (error, promise) => {
  wx.hideLoading()
  let msg = ''
  if (error.status === 0) {
    msg = '网络连接异常'
  } else if (error.status === 1) {
    msg = '网络连接超时'
  } else if (error.status === 401) {
    msg = '用户未登录'
  } else {
    if (error.response.data.message) {
      msg = error.response.data.message
    } else {
      msg = '请求数据失败,请稍后再试'
    }
    wx.showToast({
      title: msg,
      icon: 'none',
      duration: 2000
    })
    return promise.resolve(error)
  }
})
console.log(process.env.BASE_API)
fly.config.baseURL = process.env.BASE_API
export default fly
