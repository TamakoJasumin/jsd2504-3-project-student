<script setup>
import {ref} from "vue";

const tableData = [
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-02',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-04',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-01',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
]

const userArr = ref([
	{name: '张三',salary:5000,job:'前端工程师'},
	{name: '李四',salary:6000,job:'后端工程师'},
	{name: '王五',salary:7000,job:'测试工程师'},
	{name: '赵六',salary:8000,job:'UI工程师'},
])
const del = (user,index) => {
	if(confirm('您确认是否删除'+user.name+'吗?')){
		userArr.value.splice(index,1)
	}
}
</script>
<template>
	<h1>表格组件</h1>
	<el-table :data="tableData" style="width: 700px ;margin: 0 auto">
		<el-table-column type="index" label="序号" width="80" align="center"/>
		<el-table-column prop="date" label="日期" width="180" />
		<el-table-column prop="name" label="姓名" width="180" />
		<el-table-column prop="address" label="地址" />
	</el-table>
	<hr>
	<el-table :data="userArr" style="width: 750px ;margin: 0 auto" >
		<el-table-column type="index" label="序号" width="80" align="center"/>
		<el-table-column prop="name" label="姓名" width="180" align="center"/>
		<el-table-column prop="salary" label="工资" width="180" align="center"/>
		<el-table-column prop="job" label="岗位"  />
		<el-table-column label="操作" align="center" width="180">
			<template #default="scope">
				<el-button type="danger" @click="del(scope.row,scope.$index)">删除</el-button>
			</template>
		</el-table-column>
	</el-table>
</template>

<style scoped>

</style>