<template>
    <div>
        <h3>子组件</h3>
        <button @click="demo">子组件按钮</button>
    </div>
</template>

<script>
export default {
    methods: {
        demo() {
            console.log("子组件子组件");
            // 获取父组件中的对象
            console.log(this.$parent);
            // 获取父组件中的数据
            console.log(this.$parent.a);
            // 可以修改父组件中的数据
            this.$parent.a++;
            // 能调用父组件中的函数
            this.$parent.bFn(123);
        },
        created() {
            console.log("vue 实例已经创建完毕，并且已经初始化完成");
            // 获得跟对象，也就是 vue 实例对象
            console.log(this.$root);
        },
    },
};
</script>

<style scoped></style>
