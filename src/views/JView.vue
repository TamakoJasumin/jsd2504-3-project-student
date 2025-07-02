<script setup>
	import {ref} from "vue";
	//生成随机数
	let x =parseInt(Math.random()*100)+1;
	//存储用户输入的值
	const num = ref('');
	//定义猜数字的方法
	const guess = () => {
		if(num.value === '' || isNaN(num.value)) {
			alert('请输入合法数字');
			num.value = '';
			return;
		}
		if(num.value > x){
			result.value = '太大了';
		}else if(num.value < x){
			result.value = '太小了';
		}else{
			result.value = '猜对了';
		}
	}
	//存储输出给用户的结果
	const result = ref('');
</script>

<template>
	<h1>猜数字练习</h1>
	<input type="number" placeholder="请输入你猜的数字" v-model="num">
	<button @click="guess">猜一猜</button>
	<h3>你猜的结果{{result}}</h3>
</template>

<style scoped>

</style>