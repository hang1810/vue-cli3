<!doctype html>
<template>
    <div class="anyVue">
        <h1>HELLO THIS IS AnyVue.vue</h1>
        <ul>
            <!-- @click="test" -->
            <li @click=" user.show= !user.show" v-for="(user,index) in users" :key="index">
                <h3>{{user.name}}</h3>
                <h3 v-show="user.show">{{user.wechat}}</h3>

            </li>
        </ul>

        <!-- 传引用 改变全部使用的引用-->
        <button @click="deleteUser">deleteUser</button>
    </div>
</template>

<script>
    export default {
        //  props:["users"，users2],//接收vue 传值，
        props: {
            users: {
                type: Array,
                required: true //必须要传 ，默认false ，可以不传
            }
        },
        data() {
            return {};
        },
        methods: {
            test() {
                console.log(this.users);
            },
            deleteUser() {
                this.users.pop();
            }

        }
    };
</script>

<style scoped>
    /* scoped 加上这个 样式仅限自身组件 */
    /* css 样式嵌套 */
    h1 {
        color: blueviolet;
    }

    .anyVue {
        width: 100%;
        max-width: 1200px;
        margin: 40px auto;
        padding: 0 20px;
        box-sizing: border-box;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
    }

    li {
        flex-grow: 1px;
        flex-basis: 200px;
        text-align: center;
        padding: 30px;
        border: 1px solid #222;
        margin: 10px;
    }
</style>