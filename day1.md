1:vue-cli脚手架初始化项目
node_modules文件夹：项目依赖文件夹

public文件夹：一般放置一些静态资源（图片），需要注意，放在public文件夹中的静态资源，webpack进行打包的时候，会原封不动打包到dist文件夹中

src文件夹（程序员源代码文件夹）：
    assets文件夹：一般也是放置静态资源，（一般放置多个组件公用的静态资源），需要注意，放置在assets文件里面的静态资源，在webpack打包的时候，会把静态资源当作一个模块，放在js文件里面

    components文件夹:一般放置的是非路由组件（全局组件）

    App.vue 唯一的根组件
    main.js：程序入口文件，也是整个程序当中最先执行的文件

babel.config.js:配置文件

package.json文件：认为项目的‘身份证’，记录项目叫什么，项目中有哪些依赖，项目怎么运行

package-lock.json文件：缓存性文件

3、项目路由的分析
vue-router
前端所谓的路由：key：value键值对
key：URL（地址栏中的路径）
value：相应的路由组件
注意：项目上中下结构

路由组件：
Home首页路由组件，Search路由组件、Login登录组件、register注册组件
非路由组件：
Header、Footer

4、在开发项目时
1：书写静态页面（html+css）
2、拆分组件
3、获取服务器的数据动态展示
4、完成相应的动态业务逻辑

4.1使用组件步骤
引入组件，注册组件，书写组件标签

5路由组件的搭建
vue-router
路由组件有四个：Home,Search,Login,Register
-components文件夹：经常放置的是非路由组件（公用全局组件）
-pages|views文件夹：经常放置路由组件

5.1配置路由
项目当中配置的路由一般放置在router文件夹中

5.2总结
路由组件与非路由组件的区别
1：路由组件一般放置在pages|views文件夹，非路由组件放置在components文件夹中
2：路由组件一般需要在router文件夹中进行注册，非路由组件一般是以标签形式使用

$route:一般获取路由信息【路径，query，params等等】
$router:一般进行编程式导航进行路由跳转【push|replace】

5.3路由的跳转
路由的跳转有两种形式：
声明式导航router-link，可以进行路由的跳转
编程式导航push|replace，可以进行路由的跳转

编程式导航：声明式导航能做的，编程式导航都能做
但是编程式导航除了路由跳转，还能做其他的事情

6Footer组件显示与隐藏
显示或者隐藏组件：v-if|v-show
Footer组件：在Home、Search显示Footer组件
Footer组件：在登录、注册时隐藏

6.1我们可以根据组件身上的$route获取当前路由的信息，通过路由路径判断Footer显示与隐藏

8路由传参的写法
params参数：属于路径当中的一部分，需要注意，在配置路由的时候，需要占位
query参数：不属于路径中的一部分，类似ajax中的queryString /home?k=v&kv=,不需要占位

路由传参相关面试题
1、路由传递参数（对象写法）path是否可以结合params参数一起使用？
不能
2、如何指定params参数可传可不传？
配置路由的时候，占位了params参数，但是路由跳转时不传递
3、params参数可传可不传，如果传递的是空串，用undefined解决
4、路由组件能不能传递props数据
可以
