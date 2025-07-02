<script setup>
	import {ref} from "vue";
	
	const emp = ref({ name: '', salary: '', job: ''});
	const empArr = ref([]);
	const add = () => {
		console.log(emp.value);
		if ( !emp.value.name || !emp.value.salary || !emp.value.job) {
			alert("请填写完整信息");
			return;
		}
		empArr.value.push(emp.value);
		emp.value = {
			name: '',
			salary: '',
			job: ''
		};
		console.log(empArr.value);
	}
</script>

<template>
	<h1>员工列表练习</h1>
	<input type="text" placeholder="请输入员工姓名" v-model="emp.name">
	<input type="number" placeholder="请输入员工工资" v-model="emp.salary">
	<input type="text" placeholder="请输入员工岗位" v-model="emp.job">
	<button @click="add">点我添加</button>
	<hr>
	<table border="1px">
		<tbody>
		<tr>
			<th>员工编号</th>
			<th>员工姓名</th>
			<th>员工工资</th>
			<th>员工岗位</th>
		</tr>
		<tr v-for="(item, index) in empArr" :key="index">
			<td>{{index+1}}</td>
			<td>{{item.name}}</td>
			<td>{{item.salary}}</td>
			<td>{{item.job}}</td>
		</tr>
		</tbody>
	</table>
</template>

<style scoped>
table{
	margin: 0 auto;
}
</style>