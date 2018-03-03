let getters = {
  count: (state) => state.cartList.reduce((prev, next) => {
    return prev + next.carCount
  }, 0)
};
export default  getters;

