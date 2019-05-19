import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/HomePage.vue'
import Main from './views/main.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
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
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('./views/About.vue')
        },
        {
          path: 'article',
          name: 'article',
          component: () => import('./views/Article.vue')
        }
      ]
    },    
  ]
})
