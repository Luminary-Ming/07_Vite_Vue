<template>
    <div>
        <h1>父组件</h1>
        <p>父组件：{{ username }}</p>
        <p>父组件：{{ age }}</p>
        <!-- 
            子组件传递给父组件的数据，相当于给父组件中的属性赋值，
            赋值之后子组件中的数据与父组件中的数据再无瓜葛，
            也就是说父组件中改变属性值的变化，不会影响到子组件中的属性，
            两者各是各的属性，子组件只是把值给了父组件中的属性。
        -->
        <button @click="ageAdd()">年龄age++</button>
        <!-- 
            子组件传递给父组件数据：
            父组件在子组件标签中预留自定义事件，然后子组件中去激活父组件预留的自定义事件（ $emit ）
        -->
        <!-- 
            @myclick 父组件预留的自定义事件 
            因为 mydata(a, b) 函数中参数是子组件传递过来的，父组件自身没有这个两个参数
            所以，这里调用直接写 mydata 来调用函数，相当于调用函数名
         -->
        <Zi @myclick="mydata"></Zi>
    </div>
</template>

<script>
import Zi from "./Zi.vue";
export default {
    components: {
        Zi,
    },
    data() {
        return {
            username: "",
            age: "",
        };
    },
    methods: {
        ageAdd() {
            console.log("父组件中的方法");
            this.age++;
        },
        // 相当于 mydata:function(){},
        mydata(a, b) {
            console.log("父组件中的 mydata() 方法", a, b);
            this.username = a;
            this.age = b;
        },
    },
};
</script>

<style scoped></style>
