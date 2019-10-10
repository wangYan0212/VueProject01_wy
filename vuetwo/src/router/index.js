import Vue from 'vue'
import Router from 'vue-router'
import Center from '../components/center'
import Home from '../components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/home",component:Home},
    {path:"/center",component:Center},
    {path:"*",component:Home}
  ]
})
