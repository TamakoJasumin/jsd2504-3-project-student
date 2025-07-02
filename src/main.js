import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//1.引入Element框架相关内容
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//4.引入EL图标相关内容 https://element-plus.org/zh-CN/component/icon.html#注册所有图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

//3. .use(ElementPlus) 引入ElementPlus组件库
app.use(ElementPlus).use(store).use(router).mount('#app')

//2. createApp(App)创建一个vue实例  .use(store)添加全局存储vuex  .use(router)添加路由router
// mount挂载，将前面拿出来的App.vue中的内容放到/public/index.html页面中
//createApp(App).use(store).use(router).mount('#app')