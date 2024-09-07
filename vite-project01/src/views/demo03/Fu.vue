<template>
    <div>
        <h1>父组件：{{ a }}</h1>
        <Zi></Zi>
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
            a: 20,
        };
    },
    methods: {
        bFn(b) {
            console.log("b", b);
        },
    },
};
</script>

<style scoped></style>
