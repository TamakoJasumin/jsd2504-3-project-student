<script setup>
import {
	Check,
	Delete,
	Edit,
	Message,
	Search,
	Star,
} from '@element-plus/icons-vue'
</script>

<template>
	<h1>EI-按钮组件</h1>
	<el-button>按钮</el-button><br>
	<el-button type="primary" plain>蓝色镂空按钮</el-button><br>
	<el-button type="success" round>绿色胶囊按钮</el-button><br>
	<el-button type="danger" circle>红色圆形按钮</el-button><br>
	<el-button type="warning" disabled>黄色禁用按钮</el-button><br>
	<a href="https://www.baidu.com">
		<el-button type="info" link>灰色链接按钮</el-button>
	</a>
	
	<div>
		<el-button :icon="Search" square />
		<el-button type="primary" :icon="Edit" circle />
		<el-button type="success" :icon="Check" square />
		<el-button type="info" :icon="Message" circle />
		<el-button type="warning" :icon="Star" square />
		<el-button type="danger" :icon="Delete" circle />
	</div>
</template>

<style scoped>

</style>