import Vue from 'vue'
import Vuex from 'vuex';
import logger from  'vuex/dist/logger.js'
import mutations from './mutations'
Vue.use(Vuex);
const state ={count:0};
const getters={
  val:(state)=>state.count%2?'奇数':'偶数'
};
export default new Vuex.Store({
  state,
  mutations,
  plugins:[logger()],
  getters,
  strict:true//只能通过mutation更改状态，但是不支持异步
});
