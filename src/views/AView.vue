<script setup>
    import {ref} from "vue";
    
    const info = ref('info')
    const info2 = ref('今天<b>晚上</b>要<del>吃</del><u>什么</u><mark>好吃的</mark>');
	
	console.log(info.value);
</script>

<template>
    <h1>文本指令练习</h1>
    <h4>结果是：{{info}}</h4>
    <p>{{info+'今天天气不错！'}}</p>
    {{info}}
    <p v-text="info2"></p><!-- v-text 渲染成文本内容，不渲染里面的html元素 -->
    <p v-html="info2"></p><!-- v-html 里面有html元素的按照元素效果进行渲染 -->
    <p></p>
</template>

<style scoped>

</style>