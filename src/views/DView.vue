<script setup>
    const f = () => {
        console.log('点击了按钮')
    }
    const f2 = () => {
        console.log('即将为你搜索……')
    }
</script>

<template>
    <h1>事件绑定指令</h1>
    <button @click="f">按钮</button>
    
    <h3>敲回车事件</h3>
    <input type="text" placeholder="请输入你要搜索的商品" @keydown.enter="f2">
    <button v-on:click="f2">按钮</button>
</template>

<style scoped>

</style>