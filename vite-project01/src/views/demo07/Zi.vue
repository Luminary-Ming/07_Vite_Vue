<template>
    <div>
        <h3>子组件</h3>
        <!-- 
            在子组件中，使用 <slot></slot> 标签来给子组件中插入父组件中传递的标签
        -->
        <!-- 默认插槽：具有隐藏的名字"default" -->
        <slot></slot>
        <slot></slot>
        <hr />
        <!-- 具名插槽：使用 name 属性绑定相同命名的标签插槽 -->
        <slot name="neuedu"></slot>
        <slot name="neuedu"></slot>
        <hr />
        <!-- 作用域插槽：不仅有 name 属性命名插槽，还有携带的一些属性给父组件中的作用域插槽使用-->
        <slot name="msg" username="亚索" age="20" sex="男"></slot>
    </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
