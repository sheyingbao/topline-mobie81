import Vue from 'vue'
import Router from 'vue-router'
import Tabber from '@/views/Tabbar.vue'
import Home from '@/views/home/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // name: 'tabber',
      path: '/',
      component: Tabber,
      children: [
        {
          name: 'home',
          path: '',
          component: Home
        }
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
    }
  ]
})
