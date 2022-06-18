import Vue from 'vue'
import { reqCategoryList } from './api/index'
import App from './App.vue'
//三级联动组件 ---全局组件
import TypeNav from './components/TypeNav'
import Carousel from './components/Carousel'
import Pagination from './components/Pagination'
import { Button,MessageBox} from 'element-ui';
//第一个参数:全局组建的名字,第二个参数,哪一个组件
Vue.component(Button.name,Button)
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
//引入路由
import router from './router'
//引入仓库
import store from './store'
//测试
//引入mockServer.js
import './mock/mockServe'
//引入swiper样式
import 'swiper/css/swiper.css'
import {reqGetSearchInfo} from '@/api'
console.log(reqGetSearchInfo({}));
export {reqCategoryList} from './api/index'
reqCategoryList();
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //全局事件总线$bus的配置
  beforeCreate(){
    Vue.prototype.$bus=this
  },
  router,
  //注册仓库：组件实例的身上多了一个属性$store
  store
}).$mount('#app')
