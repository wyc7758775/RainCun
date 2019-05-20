import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/HomePage.vue'
import Main from './views/main.vue'
import About from './views/About.vue'
import Article from './views/Article.vue'
import LeaveMsg from './views/leaveMsg.vue'
import ReadArticle from './components/Article/content.vue'
import WriteArticle from './components/Article/writeArticle.vue'
Vue.use(Router)

export default new Router({
  //mode: 'history',  // 这个模式什么情况，如果点击强制刷会出错 Unexpected token <
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      children: [
        {
          path: 'about',
          name: 'about',
          component:About
        },
        {
          path: 'article',
          name: 'article',
          component: Article,
          children: [
            {
              path: 'readArticle',
              name: 'readArticle',
              component: ReadArticle,
            },
            {
              path: 'writeArticle',
              name: 'writeArticle',
              component: WriteArticle,
            }
          ]
        },
        {
          path: 'leaveMsg',
          name: 'leaveMsg',
          component: LeaveMsg
          // component: () => import('./views/leaveMsg.vue')  // 这个用不了动态加载 router-link :to="item.path" 是失去效果的
        }
      ]
    },    
  ]
})
