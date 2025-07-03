<script setup>
	import {ref} from "vue";
	
	const vehicleArr = ref([
		{brand:'Audi',model:'A4',license:'京A12345',color:'红',km:50000},
		{brand:'Tesla',model:'Model3',license:'京A56789',color:'黑',km:40000},
		{brand:'BYD',model:'ATTO3',license:'京B98765',color:'白',km:30000},
		{brand:'Toyota',model:'Corolla',license:'京C12345',color:'黄',km:20000},
		{brand:'Honda',model:'Civic',license:'京D12345',color:'蓝',km:10000},
	])
</script>

<template>
	<div>
		<el-container>
			<el-header style="background-color: #0aa1ad;color: #fff;font-size:30px;font-weight: bold;line-height: 60px">
				智慧车辆管理系统-IVOS
			</el-header>
			<el-container>
			<!--左侧部分-->
				<el-aside width="200px">
					<el-menu>
						<el-menu-item index="1">用户管理</el-menu-item>
						<el-menu-item index="2">车辆管理</el-menu-item>
						<el-menu-item index="3">围栏管理</el-menu-item>
					</el-menu>
				</el-aside>
				<el-main>
					<el-table :data="vehicleArr">
						<el-table-column label="序号" type="index" width="80" align="center"></el-table-column>
						<el-table-column label="车辆品牌" prop="brand" align="center"></el-table-column>
						<el-table-column label="车辆型号" prop="model" align="center"></el-table-column>
						<el-table-column label="车辆号牌" prop="license" align="center"></el-table-column>
						<el-table-column label="车辆颜色" prop="color" align="center"></el-table-column>
						<el-table-column label="车辆里程" prop="km" align="center"></el-table-column>
					</el-table>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<style scoped>

</style>