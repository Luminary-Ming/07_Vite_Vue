<template>
    <div>
        <h1>父组件</h1>
        <button @click="demo()">父组件按钮</button>
        <Zi ref="ziDom"></Zi>
    </div>
</template>

<script>
import Zi from "./Zi.vue";
export default {
    components: { Zi },
    methods: {
        demo() {
            // $refs: 在任意的组件中，使用`this.$refs`  可以获取dom对象或者当前引用的某个组件对象。
            /* 
                当 ref 标记在子组件标签上时，父组件使用 $refs 属性 + 标记能获得子组件对象，
                获得对象后就能使用子组件中的属性和方法。
            */

            console.log(this.$refs.ziDom);
        },
    },
};
</script>

<style scoped></style>
