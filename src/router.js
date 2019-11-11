import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
// import Datex from './components/main/date.vue'
// import ex from './components/ex.vue'  /:LocaName
Vue.use(Router)

export default new Router({
  
  routes: [
    {path: '/',component: Main },
    {path: '/about/:LocalNum',
     meta:{ determine:true },
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
