### 技术栈
- vue+vue-router
- vuex
- node.js
- swiper
- axios
- vue-lazyload
### src file
- mock 模拟数据
- api 接口文件
- base 基础组建
- components 页面组件
- router 路由
- store 状态管理

### 功能介绍
- 公用组件
  - 头部组件
  - 底部导航组件
  - 轮播组件
  - loading组件
- 主页
  - 轮播图
- 列表页
  - 下拉刷新及动画
  - 点击加载刷新
  - 图片懒加载
  - 添加购物车
  - 修改信息
  - 删除信息
- 购物车
- 添加页面
  - 增加列表信息
- node搭建动态路由

1.增加api方法，实现组建中调用api中的方法
2.如果基础组件需要调用数据，把api方法在组件的父级中引用，并将数据传递给基础组件
3.运用restful风格，实现数据的增删改查
4.code split 代码分割
### 优化
在列表页切换详情页的过程中，利用自定义路由方式，为了防止切换id的时候页面不刷新，在watch方法检测数据变化，重新执行api方法。从而刷新页面
如果没有对应id的车型，并跳转到列表页。

### 部分切图
![](https://github.com/han6054/vue_pro/raw/master/images/add.gif)
![](https://github.com/han6054/vue_pro/raw/master/images/home.gif)
![](https://github.com/han6054/vue_pro/raw/master/images/list.gif)






