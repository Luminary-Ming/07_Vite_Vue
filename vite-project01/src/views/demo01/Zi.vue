<template>
    <div>
        <h3>子组件</h3>
        <p>姓名：{{ username }}</p>
        <p>年龄：{{ age }}</p>
        <p>性别：{{ sex }}</p>
        <button @click="addAge()">年龄+1</button>
    </div>
</template>

<script>
/*
    父组件将数据传递给子组件之后，在子组件中必须手动接收，
    如果没有手动书写接收的代码，数据将默认传递给子组件的根标签上
    <div id="box" class="neuedu" username="亚索" sex="男">
        <h3>子组件</h3>
        <p>姓名：</p>
        <p>年龄：</p>
        <p>性别：</p>
        <button>年龄+1</button>
    </div>
*/
export default {
    /* 
        使用 props 配置项接收数据，接受父组件传递给子组件的数据，
        可以采用数组方式或者对象方式接收数据。
    */
    // 数组方式
    //props: ["username", "age", "sex"],
    props: {
        username: {},
        age: {},
        sex: {},
    },
    data() {
        return {};
    },
    methods: {
        // 这种方式是对父组件中的数据是只读，子组件不能修改数据
        addAge() {
            this.age++;
            // 控制报错  Props are readonly（属性是只读的）
            onsole.log(this.age);
        },
    },
};
</script>

<style scoped></style>
