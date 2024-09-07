<template>
    <div>
        <h3>子组件</h3>
        <p>子组件：{{ username }}</p>
        <p>子组件：{{ age }}</p>
        <button @click="ziBtn()">子组件按钮</button>
    </div>
</template>

<script>
export default {
    // 接收父组件传递过来的自定义事件
    emits: ["myclick"],
    data() {
        return {
            // 子组件中的数据
            username: "亚索",
            age: 20,
        };
    },
    methods: {
        ziBtn() {
            console.log("子组件中的激活父组件自定义事件的方法");
            // 激活父组件中的自定义事件，传递给父组件数据
            this.$emit("myclick", this.username, this.age);
        },
    },
};
</script>

<style scoped></style>
