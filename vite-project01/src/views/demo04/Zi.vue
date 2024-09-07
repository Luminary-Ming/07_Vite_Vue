<template>
    <div>
        <h3>子组件</h3>
        <p>接收爷组件中的数据 {{ a }}</p>
        <p>接收爷组件中的数据 {{ b }}</p>
    </div>
</template>

<script>
export default {
    inject: ["a", "b"],
};
</script>

<style scoped></style>
