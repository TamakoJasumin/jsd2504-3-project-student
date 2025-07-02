<script setup>

</script>

<template>
<!--
  条件渲染演示：
  1. v-if 指令根据表达式值决定是否渲染元素到DOM
  2. v-else 指令必须紧跟在 v-if/v-else-if 元素后
  3. v-show 通过CSS display属性控制显示（始终保留在DOM中）
-->

<!-- 该元素永远不会渲染（false为硬编码值） -->
<p v-if="false">小绿</p>

<!-- 该元素始终渲染（true为硬编码值） -->
<p v-if="true">小蓝</p>

<!--
  由于前一个v-if条件为true，
  此v-else元素不会渲染
-->
<p v-else>小紫</p>

<!-- 该元素始终显示（display: block） -->
<p v-show="true">小粉</p>

<!-- 该元素始终存在DOM中但隐藏（display: none） -->
<p v-show="false">小青</p>

</template>

<style scoped>

</style>