import Vue from 'vue';
import Vuex from 'vuex';
import logger from  'vuex/dist/logger.js';
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex);
const state ={cartList:[]};
export default new Vuex.Store({
  state,
  strict:true,
  mutations,
  getters,
  plugins:[logger()]
});
