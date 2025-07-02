<script setup>
	import {ref} from "vue";
	// 定义变量保存用户选择的日期
	const date = ref();
	const datetime = ref();
	
	const times = ref([]);
	const f = () => {
		console.log(times.value);
		console.log(times.value[0]);
		console.log(times.value[1]);
	}
	
</script>

<template>
	<h1>日期时间选择器组件</h1>
	<el-date-picker
		type="date"
		v-model="date"
		@change="console.log(date);"
		format="YYYY-MM-DD"
		value-format="YYYY-MM-DD"
		placeholder="请选择出发日期"
	></el-date-picker>
	<hr>
	<el-date-picker
		type="datetime"
		v-model="datetime"
		@change="console.log(datetime);"
		format="YYYY-MM-DD HH:mm:ss"
		value-format="YYYY-MM-DD HH:mm:ss"
		placeholder="请选择下单时间"
	></el-date-picker>
	<hr>
	<el-date-picker
		type="datetimerange"
		v-model="times"
		@change="f"
		format="YYYY-MM-DD HH:mm:ss"
		value-format="YYYY-MM-DD HH:mm:ss"
		start-placeholder="入住时间"
		end-placeholder="退房时间"
		range-separator="至"
	></el-date-picker>
</template>

<style scoped>

</style>