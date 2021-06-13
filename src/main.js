import Vue from 'vue'
import App from './App.vue'
//导入路由
import router from './router'
//导入状态
import store from './store'
import  axios from 'axios'
//导入ele插件
import './plugin/index'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
