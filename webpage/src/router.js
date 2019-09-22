import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/HomePage.vue'
import Main from './views/main.vue'
import About from './views/About/About.vue'
import Article from './views/ArtTitle/Article.vue'
import LeaveMsg from './views/LeaveMsg/LeaveMsg.vue'
import ReadArticle from './views/ArtTitle/components/Article/content.vue'
import WriteArticle from './views/ArtTitle/components/Article/writeArticle.vue'
import ShowContent from './views/showContent.vue'
import Gallery  from './views/gallery.vue'
Vue.use(Router)

export default new Router({
  //mode: 'history',  // 这个模式什么情况，如果点击强制刷会出错 Unexpected token < 说是需要后台来配合。不懂，以后有新需要再研究
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
        },
        {
          path: 'showContent',
          name: 'showContent',
          component: ShowContent
        },
        // Gallery
        {
          path: 'gallery',
          name: 'gallery',
          component: Gallery
        },
      ]
    },    
  ]
})
