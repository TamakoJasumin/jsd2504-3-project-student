<script setup>
    import {ref} from "vue";
    
    const info = ref('这是BView')
    const f = () => {
        console.log('点击了按钮')
        console.log(info.value)
    }
</script>

<template>
    <h1>BView</h1>
    <hr>
    <button @click="f">点击</button>
</template>

<style scoped>

</style>