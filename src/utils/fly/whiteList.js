// 过滤白名单
export default {
  // 不显示加载提示
  loading: [
    '/route/list'
  ],
  // 不重定向
  route: [
    '/login',
    '/mock',
    '/isLogin'
  ],
  // 不带token的url
  nullHeaderToken: [
    '/isLogin'
  ]
}
