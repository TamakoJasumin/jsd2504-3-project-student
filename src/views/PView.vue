<script setup>
	import {ref} from "vue";
	
	const value = ref(false)
	const value2 = ref(true)
	const value3 = ref(0)
	const value4 = ref("0")
</script>

<template>
	<h1>开关组件</h1>
	<el-switch v-model="value"></el-switch>
	<el-switch   v-model="value2"
	             class="ml-2"
	             style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"></el-switch>
	<el-switch v-model="value3" :active-value="1" :inactive-value="0"></el-switch>
	<el-switch v-model="value4" :active-value="'1'" :inactive-value="'0'"></el-switch>
</template>

<style scoped>

</style>