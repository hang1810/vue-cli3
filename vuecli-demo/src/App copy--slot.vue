<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg1="Welcome to Your Vue.js App"/>  -->
    <!-- <h1>APP.vue</h1> -->
    <!--局部组件3、调用组件 -->
    <Header  :title="title"></Header> 
    <allVUe/>
    <!-- app.vue  传值到 AnyVue组件
    左边定义的，，，右边data值
    <AnyVue :users="users"/>  
    父组件传值子组件
       1、传值（字符串，布尔） 子组件变更父组件值会报错zi，当父组件将同一值传多个子组件，
            其中一个子组件变更值，不影响其它子组件的值，会报错（理论子组件不应变更父组件值）
            应该通过注册事件进行操作
       2、传引用（对象，数组） ，当父组件将同一引用传多个子组件 其中一个子组件变更引用数据，其它子组件引用  也将发生变化
 
    -->
    <AnyVue :users="users"/>
    <hr>
    <AnyVue :users="users"/>
    <Footer @titleChang="updatedTitle":title="title"></Footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'    helloword相当于就是APP.vue 的子组件
//局部组件1 引入组件
import AnyVue from './components/AnyVue.vue';
import Header from "./components/Header.vue";
import Footer from "./components/Footer";
export default {
  name: 'App',
  components: {
    // HelloWorld ==> helloword:HelloWord
    // 局部组件2 注册组件
     AnyVue,
     Header,
     Footer 
  },
  data(){
    return{
        users: [
          {
            name:'Hang1',
            show:false,
            wechat:'137628022'
        },
        {
            name:'Hang2',
            show:false,
            wechat:'137628022'
        },
        {
            name:'Hang3',
            show:false,
            wechat:'137628022'
        }
      ]
      , title:"Hang"
    }
  },  
  methods:{
    updatedTitle(updatedTitle){
      this.title=updatedTitle;
    }
  }
}
</script>

<style >
 /* css 样式嵌套 */
 h1{
   color: blue;
 }
</style>
