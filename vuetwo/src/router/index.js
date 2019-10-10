import Vue from 'vue'
import Router from 'vue-router'
import Center from '../components/center'
import Home from '../components/home'
import Dd from '../components/DingDan'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/home",component:Home},
    {path:"/center",component:Center},
    {path:"/dd",component:Dd},
    {path:"*",component:Home}
  ]
})
