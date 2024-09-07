<template>
    <div>
        <!-- 创建路由链接 -->
        <RouterLink class="links" to="/home">首页</RouterLink>
        <RouterLink class="links" to="/news">新闻</RouterLink>
        <RouterLink class="links" to="/about">关于</RouterLink>
        <!-- 也可以写成 小写形式 -->
        <!-- <router-link></router-link> -->

        <!-- 路由出口（视图） -->
        <RouterView></RouterView>
        <!-- 也可以写成 小写形式 -->
        <!-- <router-view></router-view> -->
    </div>
</template>

<!-- <script setup></script> 组合式 -->
<script setup>
// 组合式中，只需导入组件，不需要再注册组件
import { RouterView, RouterLink } from "vue-router";

// 组合式中，定义变量方法直接写，和原生 js 相同
let username = "亚索";
let type = "刺客";
function demo() {
    console.log("这是一个 demo() 方法");
}
</script>

<style scoped>
.links {
    margin-right: 20px;
}
</style>
