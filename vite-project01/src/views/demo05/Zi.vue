<template>
    <div>
        <h3>子组件</h3>
        <button @click="getAttrs()">获取子组件中的属性</button>
    </div>
</template>

<script>
export default {
    // 接收父组件中传递的数据
    props: ["name"],
    methods: {
        getAttrs() {
            // 因为 props 接走了 name，所以 this.$attrs 中没有 name 属性
            console.log(this.$attrs); // {"class": "box","age": "20","sex": "男"}
            console.log(this.$attrs.age); // 20
            console.log(this.$attrs.class); // box
        },
    },
};
</script>

<style scoped></style>
