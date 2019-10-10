import Vue from 'vue'
import Router from 'vue-router'
import Center from '../components/center'
import Home from '../components/home'
import Dd from '../components/DingDan'
import Shop from '../components/Shopcart'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/home",component:Home},
    {path:"/center",component:Center},
    {path:"/dd",component:Dd},
    {path:"/cart",component:Shop},
    {path:"*",component:Home}

  ]
})
