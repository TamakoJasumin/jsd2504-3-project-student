<script setup>

</script>

<template>
	<h1>布局组件</h1>
	<el-row :gutter="40">
		<el-col :span="8" style="border: 3px solid red;">111</el-col>
		<el-col :span="8" style="border: 3px solid blue;">222</el-col>
		<el-col :span="8" style="border: 3px solid green;">333</el-col>
	</el-row>
	<h3>两张图片</h3>
	<el-row :gutter="10">
		<el-col :span="12"><img src="/imgs/rich.jpg" alt="" style="max-width: 100%; height: auto"></el-col>
		<el-col :span="12"><img src="/imgs/rich.jpg" alt="" style="max-width: 100%; height: auto"></el-col>
	</el-row>
	<h3>六张图片</h3>
	<el-row :gutter="10">
		<el-col :span="4"><img src="/imgs/fcq.jpg" alt="" style="width: 100%;"></el-col>
		<el-col :span="4"><img src="/imgs/fcq.jpg" alt="" style="width: 100%;"></el-col>
		<el-col :span="4"><img src="/imgs/fcq.jpg" alt="" style="width: 100%;"></el-col>
		<el-col :span="4"><img src="/imgs/fcq.jpg" alt="" style="width: 100%;"></el-col>
		<el-col :span="4"><img src="/imgs/fcq.jpg" alt="" style="width: 100%;"></el-col>
		<el-col :span="4"><img src="/imgs/fcq.jpg" alt="" style="width: 100%;"></el-col>
	</el-row>
	<h3>三张图片，宽度为1：2：3</h3>
	<el-row :gutter="10">
		<el-col :span="4"><img src="/imgs/fcq.jpg" alt="" style="width: 100%;"></el-col>
		<el-col :span="8"><img src="/imgs/fcq.jpg" alt="" style="width: 100%;"></el-col>
		<el-col :span="12"><img src="/imgs/fcq.jpg" alt="" style="width: 100%;"></el-col>
	</el-row>
	<h3>8个等分的列，每列显示数字1，2，3，4，5，6，7，8</h3>
	<el-row :gutter="10">
		<el-col :span="3" v-for="i in 8">{{i}}</el-col>
	</el-row>
	<h3>4个等分的列，每列显示数字1，2，3，4</h3>
	<el-row :gutter="10">
		<el-col :span="6" v-for="i in 4">{{i}}</el-col>
	</el-row>
	<h3>列偏移</h3>
	<el-row>
		<!--列左侧有 2 单位空白，右侧自动填充剩余 2 单位，实现居中显示-->
		<el-col :span="20" :offset="2"><img src="/imgs/rich.jpg" alt="" style="width: 100%"></el-col>
	</el-row>
	<el-row>
		<!--要求占12列且居中-->
		<el-col :span="12" :offset="6"><img src="/imgs/rich.jpg" alt="" style="width: 100%"></el-col>
	</el-row>
	<h3>布局嵌套</h3>
	<el-row>
		<el-col :span="12" style="border: 3px solid #ff0000">左侧</el-col>
		<el-col :span="12" style="border: 3px solid #00ff00">
			<el-row>
				<!--嵌套时一定要把当前元素再看做一个row，24份，再进行分配-->
				<el-col :span="8" style="border: 3px solid #00f;">111</el-col>
				<el-col :span="8" style="border: 3px solid #ff0;">111</el-col>
				<el-col :span="8" style="border: 3px solid #000;">111</el-col>
			</el-row>
		</el-col>
	</el-row>
</template>

<style scoped>

</style>