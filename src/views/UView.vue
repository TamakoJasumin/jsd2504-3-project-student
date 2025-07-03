<script setup>

</script>

<template>
	<h1>el-走马灯组件</h1>
	<el-carousel style="width: 400px;margin: 20px auto">
		<el-carousel-item><img src="/imgs/carousel1.jpg" alt="" style="width: 100%;height: 100%;"></el-carousel-item>
		<el-carousel-item><img src="/imgs/carousel2.jpg" alt="" style="width: 100%;height: 100%;"></el-carousel-item>
		<el-carousel-item><img src="/imgs/carousel3.jpg" alt="" style="width: 100%;height: 100%;"></el-carousel-item>
		<el-carousel-item><img src="/imgs/carousel4.jpg" alt="" style="width: 100%;height: 100%;"></el-carousel-item>
	</el-carousel>
	<!--trigger="click"鼠标点击下方指示灯触发切换，默认悬停切换-->
	<el-carousel style="width: 400px;margin: 0 auto 20px" trigger="click">
		<el-carousel-item><img src="/imgs/carousel1.jpg" alt="" style="width: 100%;height: 100%;"></el-carousel-item>
		<el-carousel-item><img src="/imgs/carousel2.jpg" alt="" style="width: 100%;height: 100%;"></el-carousel-item>
		<el-carousel-item><img src="/imgs/carousel3.jpg" alt="" style="width: 100%;height: 100%;"></el-carousel-item>
		<el-carousel-item><img src="/imgs/carousel4.jpg" alt="" style="width: 100%;height: 100%;"></el-carousel-item>
	</el-carousel>
	<!--type="card"轮播图使用卡片样式-->
	<el-carousel style="width: 100%;margin: 0 auto 20px" type="card">
		<el-carousel-item><img src="/imgs/carousel1.jpg" alt="" style="width: 100%;height: 100%;"></el-carousel-item>
		<el-carousel-item><img src="/imgs/carousel2.jpg" alt="" style="width: 100%;height: 100%;"></el-carousel-item>
		<el-carousel-item><img src="/imgs/carousel3.jpg" alt="" style="width: 100%;height: 100%;"></el-carousel-item>
		<el-carousel-item><img src="/imgs/carousel4.jpg" alt="" style="width: 100%;height: 100%;"></el-carousel-item>
	</el-carousel>
</template>

<style scoped>

</style>