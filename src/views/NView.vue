<script setup>
	import {ref} from "vue";
	
	const edu = ref('本科');
	
	const res = ref('');
	
	const arr = ref([
		{level:'员工',value:10},
		{level:'经理',value:20},
		{level:'总监',value:30},
		{level:'总裁',value:40}
	]);
</script>

<template>
	<h1>单选组件</h1>
	<el-radio-group v-model="edu">
		<el-radio label="学历：专科" value="专科"></el-radio>
		<el-radio label="学历：本科" value="本科"></el-radio>
		<el-radio label="学历：硕士" value="硕士"></el-radio>
		<el-radio label="学历：博士" value="博士"></el-radio>
	</el-radio-group>
	<h3>你选择的学历为{{edu}}</h3>
	
	<h2>职级选择</h2>
	<el-radio-group v-model="res">
		<el-radio v-for="f in arr" :label="f.level" :value="f.value"></el-radio>
	</el-radio-group>
	<h3>你选择的职级为{{res}}</h3>
</template>

<style scoped>

</style>