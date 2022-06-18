//home模块的小仓库
import { reqCategoryList, reqGetBannerList, reqFloorList } from "/src/api";
const state = {
  categoryList: [],
  //轮播图的数据
  bannerList: [],
  floorList:[]
};
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  GETFLOORLIST(state,floorList){
    state.floorList=floorList
  }
};
const actions = {
  //通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
  async categoryList({ commit }) {
    let result = reqCategoryList();
    // console.log(result);
    result.then((res) => {
      if (res.code == 200) {
        commit("CATEGORYLIST", res.data);
      }
    });

    // console.log(reqCategoryList);
  },
  //获取首页轮播图的数据
  async getBannerList({ commit }) {
    let result = await reqGetBannerList();
    if (result.code == 200) {
      commit("GETBANNERLIST", result.data);
    }
  },
  //获取floor数据
  async getFloorList({ commit }) {
    let result = await reqFloorList();
    if(result.code==200){
        //提交mutation
        commit('GETFLOORLIST',result.data)
    }
  },
};
//计算属性
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
