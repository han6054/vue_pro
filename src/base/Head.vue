<template>
  <div class="header">
    <slot></slot>
    <i class="iconfont icon-fanhui" v-if="back" @click="goBack"></i>
  </div>
</template>
<script>
  export default {
    props:{
      back:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return {

      }
    },
    created(){

    },
    methods:{
      goBack(){
        this.$router.go(-1)
      }
    },
    computed:{

    },
    components:{

    }
  }
</script>
<style scoped lang="less">
   .header{
     position: fixed;
     top:0;
     left:0;
     width:100%;
     background-color: #ff6816;
     height: 40px;
     line-height: 40px;
     text-align: center;
     font-weight: bold;
     color:#fff;
     z-index:999;
     i{
       position: absolute;
       left:30px;
       font-size: 20px;
     }
   }
</style>
