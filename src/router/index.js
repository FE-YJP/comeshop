import Vue from 'vue'
import Router from 'vue-router'
import Login from "@/components/person/Login"
import Index from "@/components/Index"
//商城
import Shop from "@/components/Shop"
//我的登录
import Person from "@/components/person/Person"
//购物车
import Cart from "@/components/cart/Cart"
//我的注册
import Regist from "@/components/person/Regist"
//注册协议
import Agreement from "@/components/person/Agreement"
//我的地址
import Address from "@/components/person/address"
//我的消息
import Message from "@/components/person/mymessage"
//关于我们
import Aboutus from "@/components/person/aboutus"
//意见反馈
import Advice from "@/components/person/advice"
//账户安全
import Safe from "@/components/person/safe"
//找回密码
import Password from "@/components/person/password"
//编辑地址
import Editor from "@/components/person/editor"
//我的订单
import Order from "@/components/person/order"

//商品详情
import Gooddetail from "@/components/shop/goodsdetail"
//商品列表
import Shoplist from "@/components/shop/shoplist"
//加减法
import Aaa from "@/components/cart/btn"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/btn",
      component:Aaa,
    },
    {
      path:"/",
      component:Index,
      redirect:"/shop",
      children: [{
          path: "/shop",
          component: Shop,
        },
        {
          path: "/cart",
          component: Cart
        },
        //登录
        {
          path: '/person',
          component: Person
        }, 
        {
          path: '/shoplist/:id',
          component: Shoplist
        }
     
      ]
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/regist',
      component:Regist
    },
    {
      path:'/agreement',
      component:Agreement
    },
    {
      path:"/address",
      component:Address
    },
    {
      path:"/message",
      component:Message
    },
    {
      path:"/aboutus",
      component:Aboutus
    },
    {
      path:"/advice",
      component:Advice
    },
    {
      path:"/safe",
      component:Safe
    },{
      path:"/password",
      component:Password
    },
    {
      path:"/editor",
      component:Editor
    },{
      path:"/order",
      component:Order
    },
    {
      path:'/detail/:id',
      component:Gooddetail
    },
    
   
  ]
})
