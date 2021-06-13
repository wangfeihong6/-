import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//导入颜色主题模块
import theme from './module/thenme.js';

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    theme
  }
})
