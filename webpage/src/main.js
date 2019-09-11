import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mavonEditor from 'mavon-editor'  // mk插件
import store from './store/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
  data() {
      return { value: '' }
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
