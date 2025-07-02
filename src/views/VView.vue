<script setup>

</script>

<template>
	<h1>卡片组件</h1>
	<el-row gutter="10">
		<el-col :span="6" v-for="i in 4">
			<el-card>
				<img src="/imgs/mwzz.png" alt="" style="width: 100%">
				<p>擦好杀杀杀associate</p>
				<!--为字体一般占用高度-->
				<div style="height: 21px">
					<span style="float: left">属性：A+B</span>
					<span style="float: right">好友：宋安辰，赛车那</span>
				</div>
			</el-card>
		</el-col>
	</el-row>
</template>

<style scoped>

</style>