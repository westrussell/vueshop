import { reqCartList, reqDeleteCartByid, reqUpdateCheckedByid } from "@/api";
const state = {
  cartList: [],
};
const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList;
  },
};
const actions = {
  //获取购物车列表的数据
  async getCartList({ commit }) {
    let result = await reqCartList();
    if (result.code == 200) {
      commit("GETCARTLIST", result.data);
    }
  },
  //删除购物车某一个产品
  async deleteCartByskuId({ commit }, skuid) {
    let result = await reqDeleteCartByid(skuid);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("fail"));
    }
  },
  //修改购物车某个产品选中的状态
  async updateCheckedById({ commit }, { skuId, isChecked }) {
    let result = await reqUpdateCheckedByid(skuId, isChecked);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("fail"));
    }
  },
  //删除全部选中勾选的产品
  deleteAllCheckedCart({ dispatch, getters }) {
    //context:小仓库 commit提交mutation修改state getters计算属性 state 仓库数据 dispatch派发action
    let PromiseAll = [];
    getters.cartList.cartInfoList.forEach((item) => {
      let promise =
        item.isChecked == 1 ? dispatch("deleteCartByskuId", item.skuId) : "";
      PromiseAll.push(promise);
    });
    return Promise.all(PromiseAll);
  },
  //修改全部产品的状态
  updataCartIsAllChecked({ dispatch, state }, isChecked) {
    let promiseAll = [];
    state.cartList[0].cartInfoList.forEach((element) => {
      let promise = dispatch("updateCheckedById", {
        skuId: element.skuId,
        isChecked,
      });
      promiseAll.push(promise)
    });
    return Promise.all(promiseAll)
  },
};
const getters = {
  cartList(state) {
    return state.cartList[0] || {};
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
