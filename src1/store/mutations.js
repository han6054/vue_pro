import * as Types from './mutation-type'
const mutations ={
  [Types.INCREMENT](state,num){
    state.count+=num;
  }
};
export default mutations
