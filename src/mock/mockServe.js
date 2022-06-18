//先引入mockjs模块
import Mock from 'mockjs'
//把json数据格式引入进来
//json数据格式没有对外暴露，但是可以引入
//webpack默认对外暴露的：图片、JSON数据格式
import banner from './bnner.json'
import floor from './floor.json'
//mock数据
Mock.mock('/mock/banner',{code:200,data:banner})
Mock.mock('/mock/floor',{code:200,data:floor})
