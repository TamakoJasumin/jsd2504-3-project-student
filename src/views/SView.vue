<script setup>

</script>

<template>
	<h1>布局组件</h1>
	<el-row :gutter="40">
		<el-col :span="8" style="border: 3px solid red;">111</el-col>
		<el-col :span="8" style="border: 3px solid blue;">222</el-col>
		<el-col :span="8" style="border: 3px solid green;">333</el-col>
	</el-row>
	<el-row :gutter="10">
		<el-col :span="12"><img src="/imgs/rich.jpg" alt="" style="max-width: 100%; height: auto"></el-col>
		<el-col :span="12"><img src="/imgs/rich.jpg" alt="" style="max-width: 100%; height: auto"></el-col>
	</el-row>
</template>

<style scoped>

</style>