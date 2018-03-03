<template>
  <div>
    计数器：
    <button @click="add">+</button>
    <br>
    当前数:{{this.$store.state.count}}
    <br>
    计数器：
    <button>-</button>
    {{$store.getters.val}}
  </div>
</template>

<script>
  import * as Types from '../store/mutation-type'
  export default {
    data() {
      return {}
    },
    created() {

    },
    methods: {
      add(){
        this.$store.commit(Types.INCREMENT,3)
      }
    }
  }
</script>

<style scoped>

</style>
