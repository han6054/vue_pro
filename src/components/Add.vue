<template>
  <div>
    <div class="add">
      <Head :back="true">添加</Head>
      <ul>
        <li>
          <label for="carCover">车型图片</label>
          <input type="text" v-model="car.carCover" id="carCover">
        </li>
        <li>
          <label for="carName">车型名称</label>
          <input type="text" v-model="car.carName" id="carName">
        </li>
        <li>
          <label for="carInfo">车型信息</label>
          <input type="text" v-model="car.carInfo" id="carInfo">
        </li>
        <li>
          <label for="carPrice">车型价格</label>
          <input type="text" v-model="car.carPrice" id="carPrice">
        </li>
        <li>
          <button @click="add">确认添加</button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Head from '../base/Head'
  import {addCar} from '../api/index'
  export default {
    data() {
      return {car:{}}
    },
    created() {

    },
    methods: {
     async add(){
        await addCar(this.car);
        this.$router.push('/list')
      }
    },
    computed: {},
    components: {
      Head
    }
  }
</script>
<style scoped lang="less">
  .add {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    z-index: 100;
  }

  ul {
    margin: 50px 10px 0 10px;
    li {
      label {
        display: block;
        font-size: 25px;
      }
      input {
        margin: 10px 0;
        height: 25px;
        width: 100%;
      }
      button {
        display: block;
        width: 80px;
        height: 30px;
        color: #fff;
        border: none;
        border-radius: 15px;
        background: #ff9555;
        outline: none;
        margin-top: 10px;
      }
    }
  }
</style>
