<script setup>
    import {ref} from "vue";
    
    const uname = ref('rose');
    
    const url = ref('https://www.baidu.com');
    url.value = 'https://www.zhihu.com';
    
    const title = ref('7月正在热销中');
</script>

<template>
    <h1>属性绑定指令</h1>
    <input type="text" value="uname">
    <input type="text" v-bind:value="uname">
    <input type="text" :value="uname">
    <hr>
    <a href="url">超链接1</a>
    <a :href="url">超链接2</a>
    <a :href="url" :title="title">超链接3</a>
</template>

<style scoped>

</style>