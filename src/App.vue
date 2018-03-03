<template>
  <div id="app">
    <transition name="fadeIn">
    <router-view></router-view>
    </transition>
    <Tab></Tab>
  </div>
</template>

<script>
import Tab from './base/Tab'
export default {
  name: 'App',
  components:{
    Tab
  }
}


</script>


<style>
 *{margin:0;padding:0;}
 .content{position: fixed;top:40px;bottom:50px;width: 100%;overflow: auto}
  ul,li{list-style: none;}
 .fadeIn-enter{
   opacity: 0;
 }
 .fadeIn-enter-active{
   transition: all 0.3s linear;
 }
 .fadeIn-leave-active{
   transition: all 0.3s linear;
   opacity: 0;
 }
</style>
