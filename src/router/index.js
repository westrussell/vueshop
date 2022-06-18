//配置路由
import Vue from "vue";
import VueRouter from "vue-router";
//使用插件
Vue.use(VueRouter);
//引入路由组件
import routes from "./routes";
//引入store
import store from "@/store";

//配置路由
let router = new VueRouter({
  //配置路由注意是routes
  routes: routes,
  //滚动行为
  scrollBehavior(to, from, savedPosition) {
    //返回y=0代表滚动条在最上方
    return { y: 0 };
  },
});
router.beforeEach(async (to, from, next) => {
  //to:获取到跳转到哪一个路由信息
  //form:获取从哪个路由来的信息
  //next：放行函数 next(path)放行到指定的路由

  let token = store.state.user.token;
  let name = store.state.user.userInfo.name;
  if (token) {
    if (to.path == "/login"||to.path =='register') {
      next("/");
    } else {
      if (name) {
        next()
      } else {
        //没有用户信息，派发action让用户存储用户信息再跳转
       try {
           await store.dispatch("getUserInfo");
           next()
       } catch (error) {
           //token失效
           //清除token
          await store.dispatch('userLogout')
          next('/login')
       }
      }
    }
  } else {
    next();
  }
});
export default router;
