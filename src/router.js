import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'
import Alipay from './pages/alipay'
Vue.use(Router);
export default new Router({
    routes:[
        {
            path:'/',
            name:'home',
            component:Home,
            redirect:'/index',
            // 定义子路由，获取子路由下的不同数据
            children:[
                {
                    path:'/index',
                    name:'index',
                    component:Index,
                },{
                    path:'/product/:id',
                    name:'product',
                    component:Product
                },{
                    path:'/detail',
                    name:'detail',
                    component:Detail
                },{
                    path:'/cart',
                    name:'cart',
                    component:Cart
                },{
                    path:'/order',
                    name:'order',
                    component:Order
                },{
                    // 视频中path是list和confirm
                    path:'/orderConfirm',
                    name:'order-confirm',
                    component:OrderConfirm
                },{
                    path:'/orderList',
                    name:'order-list',
                    component:OrderList                
                },{
                    path:'/orderPay',
                    name:'order-pay',
                    component:OrderPay
                },{
                    path:'/alipay',
                    name:'alipay',
                    component:Alipay
                }
            ]
        }
    ]
});