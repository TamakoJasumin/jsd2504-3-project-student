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
	<h3>六张图</h3>
	<el-row :gutter="10">
		<el-col :span="4"><img src="/imgs/fcq.jpg" alt="" style="width: 100%"></el-col>
		<el-col :span="4"><img src="/imgs/fcq.jpg" alt="" style="width: 100%"></el-col>
		<el-col :span="4"><img src="/imgs/fcq.jpg" alt="" style="width: 100%"></el-col>
		<el-col :span="4"><img src="/imgs/fcq.jpg" alt="" style="width: 100%"></el-col>
		<el-col :span="4"><img src="/imgs/fcq.jpg" alt="" style="width: 100%"></el-col>
		<el-col :span="4"><img src="/imgs/fcq.jpg" alt="" style="width: 100%"></el-col>
	</el-row>
	<h3>3张图 宽度为1：2：3</h3>
	<el-row :gutter="10">
		<el-col :span="4"><img src="/imgs/fcq.jpg" alt="" style="width: 100%"></el-col>
		<el-col :span="8"><img src="/imgs/fcq.jpg" alt="" style="width: 100%"></el-col>
		<el-col :span="12"><img src="/imgs/fcq.jpg" alt="" style="width: 100%"></el-col>
	</el-row>
	<h3>8个等分的列 每列显示数字1,2……8</h3>
	<el-row :gutter="10">
		<el-col :span="3" v-for="i in 8">{{i}}</el-col>
	</el-row>
	<h3>列偏移</h3>
	<el-row>
		<el-col :span="20" :offset="2"><img src="/imgs/rich.jpg" alt="" style="width: 100%"></el-col>
	</el-row>
	<br>
	<el-row>
		<el-col :span="12" :offset="6"><img src="/imgs/rich.jpg" alt="" style="width: 100%"></el-col>
	</el-row>
	<h3>布局嵌套</h3>
	<el-row>
		<el-col :span="12" style="border: 3px solid #00FFFF">左侧</el-col>
		<el-col :span="12" style="border: 3px solid #FFFF00">
			<el-row>
				<el-col :span="8" style="border: 3px solid deeppink;">111</el-col>
				<el-col :span="8" style="border: 3px solid blue;">222</el-col>
				<el-col :span="8" style="border: 3px solid green;">333</el-col>
			</el-row>
		</el-col>
	</el-row>
</template>

<style scoped>

</style>