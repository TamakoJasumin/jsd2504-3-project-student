<script setup>
	import {ref} from "vue";
	
	const person = ref({
		name: '',age: '',imgUrl:'',friends: []
	});
	const dataLoad = () => {
		person.value = {
			name: '范传奇',
			age: 18,
			imgUrl: 'favicon.ico',
			friends: ['张三','李四','王五']
		}
	}
</script>

<template>
	<h1>个人简历练习</h1>
	<table border="1px">
		<tbody>
		<tr>
			<td>照片</td>
			<td><img :src="person.imgUrl" alt=""></td>
		</tr>
		<tr>
			<td>姓名</td>
			<td>{{person.name}}</td>
		</tr>
		<tr>
			<td>年龄</td>
			<td>{{person.age}}</td>
		</tr>
		<tr>
			<td>好友</td>
			<td>
				<ul>
					<li v-for="f in person.friends">{{f}}</li>
				</ul>
			</td>
		</tr>
		</tbody>
	</table>
	<button @click="dataLoad">点我添加数据</button>
</template>

<style scoped>

</style>