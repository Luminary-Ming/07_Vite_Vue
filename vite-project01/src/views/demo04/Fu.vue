<template>
    <div>
        <h2>父组件</h2>
        <p>接收爷组件中的数据 {{ a }}</p>
        <p>接收爷组件中的数据 {{ b }}</p>
        <Zi></Zi>
    </div>
</template>

<script>
import Zi from "./Zi.vue";
export default {
    components: {
        Zi,
    },
    inject: ["a", "b"],
};
</script>

<style scoped></style>
