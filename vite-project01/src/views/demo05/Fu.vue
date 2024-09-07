<template>
    <div>
        <h1>父组件</h1>
        <!--
            透传属性：$attrs
            父组件中给子组件标签上写属性，属性会透传到子组件中的跟标签上，
            这时，子组件可以通过 $attrs 属性获取对应的属性值
        -->
        <Zi class="box" name="亚索" age="20" sex="男"></Zi>
    </div>
</template>

<script>
import Zi from "./Zi.vue";
export default {
    components: { Zi },
};
</script>

<style scoped></style>
