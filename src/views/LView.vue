<script setup>

import {Lock, Odometer, View} from "@element-plus/icons-vue";
</script>

<template>
	<h1>图标组件</h1>
	<!-- SVG矢量图,可以在任意分辨率下清晰显示 -->
	<el-icon size="50px" color="red"><Odometer /></el-icon>
	<el-icon><Lock /></el-icon>
	<el-icon><View /></el-icon>
</template>

<style scoped>

</style>