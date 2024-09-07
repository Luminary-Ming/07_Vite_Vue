<template>
    <div>
        <h1>爷组件</h1>
        <!-- provide 属性虽然能为后代提供数据，但是自己却不能使用 provide 中的数据 -->
        <p>爷组件中的数据 {{ a }}</p>
        <p>爷组件中的数据 {{ b }}</p>
        <Fu></Fu>
    </div>
</template>

<script>
import Fu from "./Fu.vue";
export default {
    components: {
        Fu,
    },
    // 在父辈组件（父组件、爷组件...根组件）中使用 provide 配置项为后代组件提供数据
    provide: {
        a: 100,
        b: 200,
    },
};
</script>

<style scoped></style>
