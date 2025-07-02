<script setup>
	import {ref} from "vue";
	
	const user = ref({
		username: '',
		password: '',
		sex: '',
		city: '',
		isAdmin: false
	});
	const reg = () => {
		if(!user.value.username || !user.value.password || !user.value.sex || !user.value.city ) {
			alert('请填写完整信息');
			return;
		}
		console.log(user.value);
		console.log(user.value.username);
		user.value = {
			username: '',
			password: '',
			sex: '',
			city: '',
			isAdmin: false
		};
	}
	
</script>

<template>
	<h1>表单组件</h1>
	<el-form style="width: 600px ;margin: 0 auto;" label-width="80">
		<el-form-item label="用户名" >
			<el-input placeholder="请输入用户名" v-model="user.username" clearable></el-input>
		</el-form-item>
		<el-form-item label="密码" >
			<el-input show-password placeholder="请输入密码" v-model="user.password" clearable></el-input>
		</el-form-item>
		<el-form-item label="性别" >
			<el-radio-group v-model="user.sex">
				<el-radio label="男" value="1">男</el-radio>
				<el-radio label="女" value="0">女</el-radio>
			</el-radio-group>
		</el-form-item>
		<el-form-item label="所在地" >
			<el-select placeholder="请选择你在的城市" v-model="user.city" clearable>
				<el-option label="北京" value="bj"></el-option>
				<el-option label="上海" value="sh"></el-option>
				<el-option label="广州" value="gz"></el-option>
				<el-option label="深圳" value="sz"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="管理员">
			<el-switch v-model="user.isAdmin" clearable></el-switch>
		</el-form-item>
		<el-button type="success" @click="reg">点我提交</el-button>
	</el-form>
	
</template>

<style scoped>

</style>