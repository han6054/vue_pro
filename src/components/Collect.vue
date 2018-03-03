<template>
  <div>
    <Head :back="true">购物车</Head>
    <ul class="content">
      <li v-for="l in cartList">
        <div class="imgBox">
          <img :src="l.carCover">
        </div>
        <div class="info">
          <h3>{{l.carName}}</h3>
          <button>-</button>{{l.carCount}}<button>+</button>
          <p>小计 {{l.carPrice*l.carCount}}</p>
          <button class="del">删除</button>
        </div>
      </li>
      <li>共{{count}}辆</li>
    </ul>
  </div>
</template>
<script>
  import Head from '../base/Head';
  import {mapState,mapGetters} from 'vuex'
  export default {
    data(){
      return {msg:'hello'}
    },
    created(){

    },
    methods:{

    },
    computed:{
      ...mapState(['cartList']),
      ...mapGetters(['count'])
    },
    components:{
      Head
    }
  }
</script>
<style scoped>
  .content{padding:10px;}
  .content li{
    overflow: hidden;
  }
  .content div{
    float: left;
  }
  .imgBox {
    width: 40%;
  }
  .imgBox img{
    width:100%;
  }
  .info{
    margin-left:15px;
    width: 50%;
  }
  .info button{
    width: 50px;
    height:20px;
  }
  .del{
    float:left;
    width:60px;
    height:20px;
    color:#fff;
    border:none;
    border-radius: 15px;
    background: #ff9555;
    outline:none;
  }

</style>
