import { reqGoodsInfo, reqAddorUpdateShopCart } from "@/api";
//封装临时游客身份模块uuid--生成随机字符串
import {getUUID} from '@/utils/uuid_token'
const state = {
  goodInfo: {},
  uuid_token:getUUID()
};
const mutations = {
  GETGOODINFO(state, goodInfo) {
    state.goodInfo = goodInfo;
  },
};
const actions = {
  //获取产品信息action
  async getGoodInfo({ commit }, skuId) {
    let result = await reqGoodsInfo(skuId);

    if (result.code == 200) {
      commit("GETGOODINFO", result.data);
    }
  },
  //将产品添加到购物车
  async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
   let result= await reqAddorUpdateShopCart(skuId, skuNum);
   if(result.code==200){
       return 'ok'
   }else{
       return Promise.reject(new Error('fail'))
   }
  },
};
//简化数据
const getters = {
  categoryView(state) {
    //初始状态是一个空对象,空对象的categoryView是undefined
    return state.goodInfo.categoryView || {};
  },
  skuInfo(state) {
    return state.goodInfo.skuInfo || {};
  },
  spuSaleAttrList(state) {
    return state.goodInfo.spuSaleAttrList || [];
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
