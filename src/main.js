import Vue from 'vue'
import App from './App'
import store from '@/store'
import MpvueRouterPatch from 'mpvue-router-patch'
import fly from './utils/fly/flyio'

Vue.config.productionTip = false
Vue.prototype.$http = fly
App.mpType = 'app'
App.store = store
Vue.use(MpvueRouterPatch)
const app = new Vue(App)
app.$mount()
