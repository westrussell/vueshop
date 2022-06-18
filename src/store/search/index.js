//search模块的小仓库
import {reqGetSearchInfo} from '@/api'
const state={
    //仓库初始状态
    searchList:{}
}
const mutations={
    GETSEARCHLIST(state,searchList){
        state.searchList=searchList
    }
}
const actions={
    //获取search模块数据
   async getSearchList({commit},params={}){
       //params是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
       let result= await reqGetSearchInfo(params)
       if(result.code==200){
           commit('GETSEARCHLIST',result.data)
       }
       
    }
}
//计算属性
//在项目中，getter的作用是简化仓库中的数据
const getters={
    //当前形参是当前仓库的state
    goodsList(state){
        return state.searchList.goodsList ||[]
    },
    trademarkList(state){
        return state.searchList.trademarkList
    },
    attrsList(state){
        return state.searchList.attrsList
    }

}
export default {
    state,
    mutations,
    actions,
    getters,
}