<script setup>
	const handleSelect = (index,indexPath) => {
		console.log(index,indexPath)
	}
</script>

<template>
	<h1>菜单组件</h1>
	<el-menu mode="horizontal"
	         background-color="#4F8DFE"
	         text-color="#fff"
	         default-active="1"
	         @select="handleSelect"
	         active-text-color="#fff"
	>
		<el-menu-item index="1">首页</el-menu-item>
		<el-menu-item index="2">免费课</el-menu-item>
		<el-menu-item index="3">直播课</el-menu-item>
		<el-menu-item index="4">精品课</el-menu-item>
		<el-menu-item index="5">线上班</el-menu-item>
		<el-sub-menu index="6">
			<template #title>线上班</template>
			<el-menu-item index="6-1">JSDTN2502</el-menu-item>
			<el-menu-item index="6-2">JSDTN2503</el-menu-item>
			<el-menu-item index="6-3">JSDTN2504</el-menu-item>
		</el-sub-menu>
	</el-menu>
</template>

<style scoped>

</style>