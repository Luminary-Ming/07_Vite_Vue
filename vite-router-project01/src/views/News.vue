<template>
    <div class="box">
        <h3>新闻页面</h3>
        <RouterLink to="/news/hot" class="links">热点新闻</RouterLink>
        <RouterLink to="/news/net" class="links">网络八卦</RouterLink>
        <!-- 配置二级路由出口 -->
        <RouterView></RouterView>
    </div>
</template>

<script setup>
// 导入路由组件
import { RouterView, RouterLink } from "vue-router";
</script>

<style scoped>
.box {
    width: 500px;
    height: 500px;
    background-color: #0a0;
}
.links {
    margin-right: 20px;
}
</style>
