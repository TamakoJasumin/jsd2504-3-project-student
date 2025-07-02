<script setup>
	import {ref} from "vue";
	
	const productsArr = ref([
	{title:"小米手机",price:5000,product:100},
	{title:"华为手机",price:6000,product:200},
	{title:"苹果手机",price:7000,product:300},
	{title:"三星手机",price:8000,product:400},
	{title:"OPPO手机",price:9000,product:500},
	{title:"小米手机",price:5000,product:100},
	{title:"华为手机",price:6000,product:200},
	{title:"苹果手机",price:7000,product:300},
	{title:"三星手机",price:8000,product:400},
	{title:"OPPO手机",price:9000,product:500}
	])
	const del = (index) => {
		if(confirm('确认是否删除')){
			productsArr.value.splice(index,1)
		}
	}
</script>

<template>
	<h1>循环指令</h1>
	<ul type="none">
		<li v-for="item in 5">{{item}}</li>
		<li v-for="p in productsArr">{{p}}</li>
	</ul>
	<br>
	<table border="1px">
		<tbody>
		<tr>
			<th>商品编号</th>
			<th>商品名称</th>
			<th>商品价格</th>
			<th>商品库存</th>
			<th>操作</th>
		</tr>
		<tr v-for="(p,index) in productsArr">
			<td>{{index+1}}</td>
			<td>{{p.title}}</td>
			<td>{{p.price}}</td>
			<td>{{p.product}}</td>
			<td><button @click="del(index)">删除</button></td>
		</tr>
		</tbody>
	</table>
	
</template>

<style scoped>
	table{
		width: 400px;
		margin: 0 auto;
	}
</style>