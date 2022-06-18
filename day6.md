# linux:/根目录
linux常用指令：cd:跳转目录 ls：查看 mkdir：创建目录 pwd：查看绝对路径
进入根目录/etc
安装nginx yum install niginx
再nginx目录下，nginx.conf文件进行配置
vim nginx.conf进行编辑：主要添加

# 组件通信方式
1）props
适用于父子组件通信
注意：如果父组件给子组件传递数据（函数），本质是子组件给父组件传递数据
路由也可以传递props

2）自定义事件
子组件给父组件传递数据
$on $emit

3)全局事件总线$bus
万能
Vue.prototyoe.$bus=this

4)pubsub js

5）vuex
万能

6）插槽
父子组件通信---（一般结构）
默认插槽
具名插槽
作用域插槽

1）事件注意事项
事件：系统事件 click 双击，鼠标等
自定义事件 @click.native可以把自定义事件变为原生的dom事件
事件源、事件类型、事件回调
原生DOM --button可以绑定系统事件