三级联动组件是可以点击的：一级分类、二级分类、三级分类
点击：Home模块跳转到Search模块，一级会把用户选中的产品在路由跳转的时候进行传递
# 路由跳转
声明式导航：router-link
编程式导航：push|replace
router-link,可以实现路由的跳转与传递参数，但出现了卡顿的现象
router-link是一个组件当服务器的数据返回时，循环出很多的router-link组件【创建组件实例对象】1000+，创建组件实例的时候，一瞬间创建1000+，很耗内存，出现了卡顿

# 过渡动画：
前提组件|元素必须有v-if|v-show指令才可以进行过渡动画

在APP根组件当中发请求，【根组件mounted】执行一次

合并参数params与query参数

mock数据（模拟）
mock数据，需要用到一个插件mockjs
 使用步骤：
 1）在项目当中src文件夹中创建mock文件夹
 2）第二步，准备json数据（mock文件夹中创建相应的json文件）
 3)把mock数据需要的图片放置在public文件夹中【public文件在在打包的时候，会把相应的数据原封不动的放到dist文件夹中】
 4）开始mock虚拟数据,创建mockServer.js模拟数据
 5)mockServer.js文件在入口文件中引入（至少需要执行一次,才能模拟数）

 安装swiper插件

 # 轮播图
 最完美的解决方案
 watch +nextTick
 $nextTick可以保证页面中的结构一定是有的