1:编程式路由跳转到当前路由(参数不变),多次执行会抛出NavigationDuplicate的警告错误
--路由传参的两种形式:声明式导航,编程式导航
--声明式导航没有这类问题,因为vue-router底层已经处理好了
1.1为什么编程式导航进行路由跳转的时候,有这种警告错误?
"vue-router": "^3.5.4":最新的vue-router引入promise
通过给push方法传递相应的成功,失败回调,可以解决
this.$router.push({name:'search',params:{keywords:this.keywords},query:{k:this.keywords.toUpperCase()}},()=>{},()=>{})
这种写法治标不治本

# 跨域问题
什么是跨域：协议，域名，端口号不同请求，称为跨域
http://gmall-h5-api.atguigu.cn

JSONP、CROS、代理

# nprogress进度条的使用

# vuex状态管理库
vuex是官方提供一个插件，状态管理库，集中式管理项目中组件公用的数据
组件很多，数据很多需要用到vuex
state
mutation
actions
getters

# vuex基本使用
vuex实现模块式开发

# 防抖
前面的所有触发都被取消，最后一次执行在规定的时间之后才会触发，也就是说快速连续的触发，只会执行一次
# 节流
在规定的间隔时间范围内不会重复触发回调，只有大于这个时间间隔才会触发回调，把频繁触发改为少量触发
