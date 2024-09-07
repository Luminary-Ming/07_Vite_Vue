<template>
    <div>
        <h1>父组件</h1>
        <!-- 
            父组件使用插槽给子组件传递标签 
            必须使用 template 标签来标记，同时需要 v-slot 指令来指定插槽的名称
         -->
        <Zi>
            <!-- 普通插槽 -->
            <!-- v-slot:default  v-slot: 可以简化为 # -->
            <template #default>
                <p>这是普通插槽</p>
                <h5>给子组件中插入标签</h5>
                <a href="#">这是超链接</a>
            </template>

            <!-- 具名插槽 -->
            <template v-slot:neuedu>
                <p>这是具名插槽</p>
                <h5>给子组件中插入标签</h5>
                <a href="#">这是超链接</a>
            </template>

            <!-- 作用域插槽，这里能使用子组件中作用域插槽上传递过来的属性，父组件不可用这些属性 -->
            <template v-slot:msg="user">
                <p>这是作用域插槽</p>
                <p>姓名：{{ user.username }}</p>
                <p>年龄：{{ user.age }}</p>
                <p>性别：{{ user.sex }}</p>
            </template>
        </Zi>
    </div>
</template>

<script>
import Zi from "./Zi.vue";
export default {
    components: { Zi },
};
</script>

<style scoped></style>
