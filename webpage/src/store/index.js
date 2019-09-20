
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters' // 导入响应的模块，相当于引入了这个组件下所有导出的事例
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
  userId: '',
  bookMenu: [],
  currentBookId: '', // 当前选择的书本的ID
  currentContent: '', // 当前选择的内容
  currentContentId: '', // 当前选择的文章的ID
  dialogShow: false, // 没办法了，只能用这个了来作为弹窗的全局设置了
  inpuContent: {
    type: '',
    content: '确定要删除这篇文章吗',
    title: '警告'
  },
  ifPop: false,
  aboutValue: {}, // 关于我的内容变更
  arTitleMenu: [], // 文章列表
  newConetentId: '' // 新鲜出炉的文章ID
}

// 注册各大模块
const store = new Vuex.Store({
  state,
  getters, // 获取数据并渲染*
  actions, // 数据的异步操作*
  mutations
})

export default store