import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
export default new Router({
  routes: [
    {path:'/home',meta:{title:'首页'},
      component:()=>import('../components/Home.vue')},
    {path:'/collect',meta:{title:'购物车'},
      component:()=>import('../components/Collect.vue')},
    {path:'/detail/:bid',name:'detail',meta:{title:'详情页'},
      component:()=>import('../components/Detail')},
    {path:'/list',meta:{title:'列表页'},
      component:()=>import('../components/List')},
    {path:'/add',meta:{title:'添加页'},
      component:()=>import('../components/Add')},
    {path:'*',
      redirect:'/home'},
  ]
})
