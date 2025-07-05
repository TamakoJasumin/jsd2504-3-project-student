<script setup>
import {ref} from "vue";

const user = ref ({
	name: '',
	salary: '',
	job: ''
});

const userArr = ref([]);

const save = () => {
	if (!user.value.name || !user.value.salary || !user.value.job) {
		alert("请填写完整信息");
		return;
	}
	userArr.value.push(user.value);
	console.log(user.value.name);
	console.log(user.value.salary);
	console.log(user.value.job);
	user.value = {
		name: '',
		salary: '',
		job: ''
	};
}
const del = (user,index) => {
	if(confirm('您确认是否删除'+user.name+'吗?')){
		userArr.value.splice(index,1)
	}
}

</script>

<template>
	<h1>员工列表练习</h1>
	<el-form style="width: 700px;margin: 0 auto">
		<el-form-item label="姓名">
			<el-input placeholder="请输入员工姓名" v-model="user.name" clearable></el-input>
		</el-form-item>
		<el-form-item label="工资">
			<el-input placeholder="请输入员工工资" v-model="user.salary" clearable></el-input>
		</el-form-item>
		<el-form-item label="岗位">
			<el-input placeholder="请输入员工岗位" v-model="user.job" clearable></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="success" @click="save" style="margin: 0 auto">点我提交</el-button>
		</el-form-item>
	</el-form>
	<br>
	<el-table :data="userArr" style="width: 700px;margin: 0 auto">
		<el-table-column type="index" label="序号" width="80" align="center"/>
		<el-table-column prop="name" label="姓名" width="180" align="center"/>
		<el-table-column prop="salary" label="工资" width="180" align="center"/>
		<el-table-column prop="job" label="岗位" />
		<el-table-column label="操作" align="center" width="180">
			<template #default="scope">
				<el-button type="danger" @click="del(scope.row,scope.$index)">删除</el-button>
			</template>
		</el-table-column>
	</el-table>
</template>

<style scoped>

</style>