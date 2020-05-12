import Vue from 'vue'
import App from './App.vue'
//注册全局组件
//1、引入组件
import AllVue from './components/AllVue'
//2、注册全局组件
Vue.component("allVUe",AllVue);

Vue.config.productionTip = false

new Vue({
  // el:"#app", 
  render: h => h(App), // APP.vue
}).$mount('#app')  //指向 index.html-->app
