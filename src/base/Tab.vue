<template>
  <div class="footer">
   <router-link to="/home">
     <i class="iconfont icon-home"></i>
     <span>首页</span>
   </router-link>
    <router-link to="/list">
      <i class="iconfont icon-liebiao"></i>
      <span>列表</span>
    </router-link>
    <router-link to="/collect">
      <i class="iconfont icon-shoucang"></i>
      <span>购物车</span>
    </router-link>
    <router-link to="/add">
      <i class="iconfont icon-tianjia"></i>
      <span>添加</span>
    </router-link>
  </div>
</template>
<style scoped lang="less">
  .footer{
    position: fixed;
    left:0;
    bottom:0;
    width: 100%;
    height:50px;
    display: flex;
    border-top:1px solid #ccc;
    a{
      color:#333;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
    }
    a.router-link-active{
      color: #ff2c52;
    }
  }
</style>
