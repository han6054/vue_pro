import * as Types from './mutation-type'
const mutations ={
   [Types.ADD_CART](state,car){
     //如果添加过累加数量
     let product = state.cartList.find(item=>item.carId===car.carId);
     if(product){
       product.carCount +=1;
        state.cartList = [...state.cartList]
     }else{
       car.carCount = 1;
        state.cartList =[...state.cartList,car]
     }
   }
};
export default mutations;
