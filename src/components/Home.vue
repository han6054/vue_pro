<template>
  <div>
    <Head>首页</Head>
    <div class="content">
      <Loading v-if="loading"></Loading>
      <template v-else>
      <Swiper :swiperSlides="slider"></Swiper>
      <div class="container">
        <h3>热门车型</h3>
        <ul>
          <li v-for="item in hotCar">
            <img :src="item.carCover">
            <b>{{item.carName}}</b>
          </li>
        </ul>
      </div>
      </template>
    </div>
  </div>
</template>
<script>
  import Head from '../base/Head';
  import Swiper from '../base/Swiper';
  import {getAll} from '../api';
  import Loading from  '../base/Loading'
  export default {
    data(){
      return {
        slider:[], hotCar:[],
        loading:true
      }
    },
     created(){
       this.getData()
    },
    methods:{
      async getData(){
        let [slider,hotCar] = await getAll();
        this.slider = slider;
        this.hotCar = hotCar;
        this.loading = false;
      }
    },
    computed:{

    },
    components:{
        Head,
        Swiper,
        Loading
    }
  }
</script>
<style scoped lang="less">
  h3{color:#666;padding:5px 0;}
  .container{
    padding:0 2%;
    ul {
      display: flex;
      flex-wrap: wrap;
      li{
        margin:0 1%;
        list-style: none;
        width:48%;
        img{width:100%;display:block}
        b{text-align:center;
          display:block;
          height: 25px;
          line-height:25px;
        }
      }
    }
  }
</style>
