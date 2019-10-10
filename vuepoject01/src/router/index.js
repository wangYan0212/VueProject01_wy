import Vue from 'vue'
import Router from 'vue-router'
import cart from '../components/ShopCart'
import center from '../components/center'
import dd from '../components/DingDan'

Vue.use(Router);

export default new Router({
  routes: [
    {path:"/cart",component:cart},
    {path:"/center",component:center},
    {path:"/dd",component:dd},
    {path:"*",redirect:"/center"}

  ]
})
