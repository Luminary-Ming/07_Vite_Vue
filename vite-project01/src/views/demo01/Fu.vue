<template>
    <div>
        <h1>父组件</h1>
        <p>姓名：{{ username }}</p>
        <p>年龄：{{ age }}</p>
        <p>性别：{{ sex }}</p>
        <button @click="age++">年龄+1</button>
        <!--
            父组件传递给子组件数据：
            在 父组件.vue 文件中，直接在 子标签<Zi> 上写需要传递的属性和属性值 
        -->
        <Zi
            id="box"
            class="neuedu"
            v-bind:username="username"
            :age="age"
            :sex="sex"
        ></Zi>
    </div>
</template>

<script>
import Zi from "./Zi.vue";
export default {
    // 注册组件
    components: {
        Zi,
    },
    data() {
        return {
            username: "亚索",
            age: 20,
            sex: "男",
        };
    },
};
</script>

<style scoped></style>
