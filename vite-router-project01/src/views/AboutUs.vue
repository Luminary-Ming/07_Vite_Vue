<template>
    <div class="box">
        <h3>关于我们</h3>
    </div>
</template>

<script>
export default {
    created() {
        /*
        $router 和 $route 的区别：

            $router：路由实例对象，主要是用来调用方法，进行跳转页面。
                push()      // 跳转
                go(n)       // 跳转
                back()      // 后退网页
                forward()   // 前进网页

            $route：路由信息对象，主要用于获取一些路由的信息数据。
                query       // 获取参数
                params      // 获取参数
                path        // 获取地址栏的路径
                meta        // 元数据
                name        // 当前路由名字
        */

        // query 获取参数数据
        // query 参数会附加在 URL 后面，例如，/user?name=John&age=30。
        console.log("====== query方式获取参数 ======");
        // 获取参数
        console.log(this.$route.query); // {"username": "亚索","age": "20","sex": "男"}
        // 获取当前路由名字
        console.log(this.$route.name); // about
        // 获取地址栏的路径
        console.log(this.$route.path); // /about
        // 获取元数据
        console.log(this.$route.meta); // [[Prototype]]: Object 不知道是个啥，就是个对象
        // // 获取参数中的 username 属性值
        console.log(this.$route.query.username); // 亚索

        // params 获取参数数据
        // params 参数通常用于动态路由匹配，并不会直接显示在 URL 中
        console.log("====== params方式获取参数 ======");
        // 至于为什么拿到的是 undefined，问 AI，咱也不懂，好像是有点特殊
        console.log(this.$route.params); // undefined
        console.log(this.$route.name); // about
        console.log(this.$route.meta); // [[Prototype]]: Object 不知道是个啥，就是个对象
        console.log(this.$route.params.username); // undefined
    },
};
</script>

<style scoped>
.box {
    width: 200px;
    height: 200px;
    background-color: #0af;
}
</style>
