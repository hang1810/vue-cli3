<!doctype html>
<template>
    <div class="footer">
        <h1>{{title111}}  ---  {{title}}</h1>
        <button  @click="changeTitle()">修改父组件值 直接变更 会发生警告</button>
        <button  @click="changeTitleBySJ()">注册事件修改父组件值</button>
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
                title111:'Vue Component FOOTER DEMO'
            }
        },
        methods:{
            changeTitle(){
                this.title = "new Hang"; //这样传值 只会影响
            },
            changeTitleBySJ(){
                console.log('开始修改');
                //注册事件 参数1：事件名称  参数2：值
                this.$emit("titleChang","Hang 通过emit到app.vue修改title值");
            }

        }
    };
</script>

<style scoped>
 /* scoped 加上这个 样式仅限自身组件 */
 /* css 样式嵌套 */
 .footer{
     background-color: chocolate;
     padding: 10px;
 }
 h1{
   color:beige;
   text-align: center;
 }
</style>