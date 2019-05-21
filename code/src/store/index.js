
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters' // 导入响应的模块，相当于引入了这个组件下所有导出的事例
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
  userId: ''
}

// 注册各大模块
const store = new Vuex.Store({
  state,
  getters, // 获取数据并渲染*
  actions, // 数据的异步操作*
  mutations
})

export default store