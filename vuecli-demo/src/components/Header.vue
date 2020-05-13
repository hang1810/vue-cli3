<template>
    <div class="header">
        <h1>{{title111}} ---  {{title}}</h1>
        
    </div>
</template>

<script>
    export default{
        props:{
            title:{
                type:String,
                required:true //必须要传 ，默认false ，可以不传
            }
        },
 
        data(){
            return{
                title111:'Vue Component HEADER DEMO'
            }
        },
        //生命周期函数
        beforeCreate(){
            alert("这时候实例还没有创建，所以你无法得到data,也不能用watch监听");
        },
        created(){
            alert("这时候实例创建， 得到data, 用watch监听，页面空白");
        },
        beforeMount(){
            alert("页面挂载签，此时页面空白，render函数首次调用");
        },
        mounted(){
            alert("页面挂载完，此时页面内容展示，可访问dom");
        },
        beforeUpdate(){
            alert("数据更新前，虚拟dom打补丁之前");
        },
        updated(){
            alert("数据更新完");
        },
        beforeDestroy(){
            alert("页面离开之前被调用，清楚定时器，第三方dom结构");
        },
        destroyed(){
            alert("实例完全销毁");
        }
    };
</script>

<style scoped>
 /* scoped 加上这个 样式仅限自身组件 */
 /* css 样式嵌套 */
 .header{
     background-color: chocolate;
     padding: 10px;
 }
 h1{
   color:beige;
   text-align: center;
 }
</style>