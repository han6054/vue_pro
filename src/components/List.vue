<template>
  <div>
    <Head :back="true">列表</Head>
    <div class="spinner" ref="spinner">
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div>
    <div class="content" ref="scroll" @scroll="loadMove">
      <ul>
        <router-link v-for="(car,index) in cars"
        :key="index"
        :to="{name:'detail',params:{bid:car.carId}}"
        tag="li" >
          <div class="imgBox">
            <img v-lazy="car.carCover">
          </div>
          <div>
            <h4>{{car.carName}}</h4>
            <p>{{car.carInfo}}</p>
            <b><span>售价：</span>{{car.carPrice}}</b>
            <div class="btn-box">
              <button @click.stop="remove(car.carId)">删除</button>
              <button @click.stop="addCart(car)">加入购物车</button>
            </div>
          </div>
        </router-link>
      </ul>
      <div @click="more">加载更多</div>
    </div>
  </div>
</template>
<script>
  import Head from '../base/Head';
  import {pagination,removeCar} from '../api';
  import * as Types from '../store/mutation-type';
  export default {
    data(){
      return {
        cars:[],
        offset:0,
        hasMore:true,
        isLoading:false,
      }
    },
    mounted(){
      let scroll = this.$refs.scroll;
      let spinner = this.$refs.spinner;
      let top = scroll.offsetTop;
      let distance =0;
      let isMove = false;
      scroll.addEventListener('touchstart',(e)=> {
        if(scroll.scrollTop !=0 || scroll.offsetTop != top) return
         let start = e.touches[0].pageY;
         let move =(e)=>{
           isMove = true;
            let current = e.touches[0].pageY;
            distance = current - start;
           if(distance>0){
             if(distance<=50){
               scroll.style.top=distance+top+'px';
               spinner.style.top = distance +'px';
             }else{
               distance = 50;
               scroll.style.top = top +50+'px';
               spinner.style.top = '0px';
             }
           }else{
             scroll.removeEventListener('touchmove',move);
             scroll.removeEventListener('touchend',end);
           }
         };
         let end=(e)=>{
             if(!isMove)return;
             isMove = false;
             clearTimeout(this.timer1);
             this.timer1 = setInterval(()=>{
               if(distance<=0){
                 clearTimeout(this.timer1);
                 scroll.style.top= top;
                 scroll.removeEventListener('touchmove',move);
                 scroll.removeEventListener('touchend',end);
                 //下拉刷新
                 this.cars = [];
                 this.offset = 0;
                 this.hasMore = true;
                 this.getData();
                 return
               }else{
                 console.log(distance);
                 distance-=1;
                  scroll.style.top = top+distance +'px';
                  spinner.style.top = '0px';
               }

             },1)
          };
        scroll.addEventListener('touchmove',move);
        scroll.addEventListener('touchmove',end);
      },false)
    },
    created(){
       this.getData();
    },
    methods:{
      more(){
        this.getData();
      },
      loadMove(){
        clearTimeout(this.timer)
        this.timer = setTimeout(()=>{
          let {scrollTop,clientHeight,scrollHeight} = this.$refs.scroll;
          if(scrollTop+clientHeight+20>scrollHeight){
                this.getData();
          }
        },60)
      },
      async getData(){
        if(this.hasMore&&!this.isLoading){
          let {hasMore,cars} = await pagination(this.offset);
          this.cars = [...this.cars,...cars];
          this.hasMore = hasMore;
          this.isLoading = false;
          this.offset = this.cars.length;
        }
       },
      async remove(id){
        await removeCar(id);
        this.cars = this.cars.filter(item => item.carId !==id);
      },
      addCart(car){
        this.$store.commit(Types.ADD_CART,car)
      }
    },
    components:{
      Head
    }
  }
</script>
<style scoped>
  .content ul{
    padding:10px;
  }
  .content ul li{overflow: hidden;margin-bottom:5px;}
  .content ul li .imgBox{float:left;width:50%;}
  .imgBox img{width:100%}
  .content div{
   float:left;
    width: 40%;
    text-align: left;
    margin-left: 15px;
  }
  .content div h4{
    line-height: 20px;
  }
  .content div p{line-height:15px;margin:6px 0;font-size:12px;}
  .content div b{color: #ff2330;}
  .content div b span{color: #24800a}
  .content .btn-box{overflow: hidden;width:100%;}
  .content button{
    float:left;
    width:60px;
    height:20px;
    color:#fff;
    border:none;
    border-radius: 15px;
    background: #ff9555;
    outline:none;
  margin-top:10px;}
  .spinner {
    width: 40px;
    height: 40px;
    position: absolute;
    left:50%;
    top:0;
    margin-left:-20px;
    z-index:1;
  }

  .double-bounce1, .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #67CF22;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;

    -webkit-animation: bounce 2.0s infinite ease-in-out;
    animation: bounce 2.0s infinite ease-in-out;
  }

  .double-bounce2 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  @-webkit-keyframes bounce {
    0%, 100% { -webkit-transform: scale(0.0) }
    50% { -webkit-transform: scale(1.0) }
  }

  @keyframes bounce {
    0%, 100% {
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    } 50% {
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
      }
  }
</style>
