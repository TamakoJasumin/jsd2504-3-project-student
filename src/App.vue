<template>
	<nav>
	<router-link to="/">Home</router-link> |
	<router-link to="/about">About</router-link> |
	<router-link to="/AView">文本指令</router-link> |
	<router-link to="/BView">BView</router-link> |
	<router-link to="/CView">属性绑定指令</router-link> |
	<router-link to="/DView">事件绑定指令</router-link> |
	<router-link to="/EView">循环指令</router-link> |
	<router-link to="/FView">双向绑定指令</router-link> |
	<router-link to="/GView">隐藏显示指令</router-link> | <br>
	<router-link to="/HView">员工列表练习</router-link> |
	<router-link to="/IView">个人简历练习</router-link> |
	<router-link to="/JView">猜数字练习</router-link> | <br>
	<router-link to="/KView">EI-按钮组件</router-link> |
	<router-link to="/LView">图标组件</router-link> |
	<router-link to="/MView">消息提示组件</router-link> |
	<router-link to="/NView">单选组件</router-link> |
	<router-link to="/OView">下拉选框组件</router-link> |
	<router-link to="/PView">开关组件</router-link> |
	<router-link to="/QView">表单组件</router-link> |
	<router-link to="/RView">菜单组件</router-link> |
	<router-link to="/SSView">表格组件</router-link> |
	<router-link to="/SView">布局组件</router-link> |
	<router-link to="/TView">容器组件</router-link> |
	<router-link to="/UView">UView</router-link> |
	<router-link to="/VView">卡片组件</router-link> |
	<router-link to="/WView">日期时间选择器组件</router-link> |
	<router-link to="/XView">商品列表综合练习</router-link> |
	<router-link to="/YView">YView</router-link> |
	<router-link to="/ZView">ZView</router-link>
	</nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup lang="ts">
</script>