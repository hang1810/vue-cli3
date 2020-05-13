<template>
    <div class="allVue">
        <h1>HELLO THIS IS ALLVUE.vue</h1>

        <ul>
            <li v-for="(user,index) in users" :key="index">{{user}}</li>
        </ul>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                users: ["测试1", '测试2', '测试3']
            }
        }
    };
</script>

<style>

</style>