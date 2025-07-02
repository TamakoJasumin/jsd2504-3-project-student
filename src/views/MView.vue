<script setup >
	import {ElMessage} from "element-plus";
	
	const f = (type) => {
		switch (type){
			case 1: ElMessage.success('我是一条成功消息');break;
			case 2: ElMessage.error('我是一条错误消息');break;
			case 3: ElMessage.warning('我是一条警告消息');break;
			case 4: ElMessage.primary('我是一条普通消息');break;
			case 5: ElMessage.info({message:'我是可关闭的消息',showClose:true});
		}
	}
</script>

<template>
	<h1>消息提示组件</h1>
	<el-button type="success" @click="f(1)">成功消息</el-button>
	<el-button type="danger" @click="f(2)">错误消息</el-button>
	<el-button type="warning" @click="f(3)">警告消息</el-button>
	<el-button type="primary" @click="f(4)">普通消息</el-button>
	<el-button type="info" @click="f(5)">可关闭消息</el-button>
</template>

<style scoped>

</style>