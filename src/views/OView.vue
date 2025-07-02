<script setup>
	import {ref} from "vue";
	
	const city = ref('bj')
</script>

<template>
	<h1>下拉选框组件</h1>
	<el-select placeholder="请选择你在的城市" style="width: 50%" v-model="city">
		<el-option label="北京" value="bj"></el-option>
		<el-option label="上海" value="sh"></el-option>
		<el-option label="广州" value="gz"></el-option>
		<el-option label="深圳" value="sz"></el-option>
	</el-select>
	<h3>你选择的城市是：{{city}}</h3>
</template>

<style scoped>

</style>