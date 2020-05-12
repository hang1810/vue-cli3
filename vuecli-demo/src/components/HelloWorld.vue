
<template>
<!-- HTML 结构 ：只能有一个根标签 -->
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{from}}</p>
    <p>{{greeting()}}</p>
  </div>
   
</template>

<script>
  // js 逻辑部分
export default {
  name: 'HelloWorld',
  // 属性传值
  // props: {   msg: String }
  data(){
    return{
      msg:'Hang',
      from:'CHINA'
    };
  },
  methods:{
    greeting(){
      return  `HELLO THIS IS ${this.msg}  ,  FROM ${this.from}`;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
