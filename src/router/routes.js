// 路由配置信息
import Home from "../pages/Home";
import Search from "../pages/Search";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Detail from "../pages/Detail";
import AddCartSuccess from '../pages/AddCartSuccess'
import ShopCart from '../pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
export default [
  {
    path: "/paysuccess",
    component:PaySuccess,
    name:'paysuccess',
    meta: { show: true },
  },
  {
    path: "/pay",
    component:Pay,
    name:'pay',
    meta: { show: true },
  },
  {
    path: "/trade",
    component:Trade,
    name:'trade',
    meta: { show: true },
  },
  {
    path: "/shopcart",
    component:ShopCart,
    name:'shopcart',
    meta: { show: true },
  },
  {
    path: "/addcartsuccess",
    component:AddCartSuccess,
    name:'addcartsuccess',
    meta: { show: true },
  },
  {
    path: "/home",
    component: Home,
    meta: { show: true },
  },
  {
    path: "/detail/:skuid",
    component: Detail,
    meta: { show: true },
  },
  {
    path: "/search/:keyword?", //占位
    component: Search,
    meta: { show: true },
    name: "search",
    //路由组件能不能传递props数据
    //布尔值写法:params
    // props:true
    // 函数写法：可以把params参数，query参数，通过props传递给路由组件
    // props:($route)=>{
    //     return {
    //         keywords:$route.params.keywords,k:$route.query.k
    //     }
    // }
  },
  {
    path: "/register",
    component: Register,
    meta: { show: false },
  },
  {
    path: "/login",
    component: Login,
    meta: { show: false },
  },
  //重定向：在项目跑起来的时候，访问/时，立即定向到首页
  {
    path: "*",
    redirect: "/home",
  },
];
