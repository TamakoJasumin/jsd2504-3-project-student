<script setup>
	import {ref} from "vue";
	
	const user = ref({
		name: "",
		password: "",
		sex: ""
	});
	const reg = () => {
		console.log(user.value);
		console.log(user.value.name);
		console.log(user.value.password);
		console.log(user.value.sex);
	}
</script>

<template>
	<h1>双向绑定指令</h1>
	<h3>用户注册</h3>
		用户名
		<input type="text" placeholder="请输入用户名" v-model="user.name"><br>
		密码
		<input type="password" placeholder="请输入密码" v-model="user.password"><br>
		性别
		<input type="radio" name="sex" value="1" v-model="user.sex">男
		<input type="radio" name="sex" value="0" v-model="user.sex">女
		<br>
		<button @click="reg">注册</button>
</template>

<style scoped>

</style>