<template>
    <div class="box">
        <h3>首页</h3>
        <button @click="goAbout1()">跳转到关于我们 query 携带参数</button>
        <br />
        <button @click="goAbout2()">跳转到关于我们 params 携带参数</button>
    </div>
</template>

<script>
export default {
    methods: {
        goAbout1() {
            // 因为 vue 实例绑定了路由实例，所以可以在任何 vue 文件中使用路由对象
            // this.$router 获取路由对象
            console.log(this.$router);
            /*
                路由对象中的 push() 方法，可以让页面实现跳转
                this.$router.push("/about")；

                如果在跳转的同时要传递参数，就要写成对象的形式
                this.$router.push({
                });
            */
            // this.$router.push({
            //     // 跳转的路径
            //     path: "/about",
            //     // 跳转时，可以使用 query 携带参数
            //     query: {
            //         username: "亚索",
            //         age: 20,
            //         sex: "男",
            //     },
            // });
        },
        goAbout2() {
            this.$router.push({
                path: "/about",
                // 跳转时，使用 params 携带参数
                params: {
                    username: "卡特琳娜",
                    age: 18,
                    sex: "女",
                },
            });
        },
    },
};
</script>
<style scoped>
.box {
    width: 200px;
    height: 200px;
    background-color: #fa0;
}
</style>
