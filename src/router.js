import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
// import Datex from './components/main/date.vue'
// import ex from './components/ex.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Main},
    {path: '/about',name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
