<template>
    <div>
        <h3>子组件</h3>
        <p>{{ aa }}</p>
        <p>{{ bb }}</p>
        <button @click="show()">子组件按钮</button>
        <!-- ref="abc" 标记标签 -->
        <div class="box" ref="abc"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            aa: 100,
            bb: 300,
        };
    },
    methods: {
        show() {
            console.log("子组件中的方法");
            // $refs 属性 + 标记能获得 dom 标签对象
            console.log(this.$refs.abc); // <div class="box"></div>
        },
    },
};
</script>

<style scoped></style>
