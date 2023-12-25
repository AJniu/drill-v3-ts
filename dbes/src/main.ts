import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
// 导入路由对象
import router from './router'
// 导入指令注册
import registerDirectives from './directives'
// 导入全局组件导入
// import registerComp from './global'

import './assets/main.scss'
// import '@/utils/hooks/useCount'
const app = createApp(App)

// 批量注册自定义指令
registerDirectives(app)

// 批量导入全局组件
// registerComp(app)
// app.use(registerComp) // 使用use方法更优雅，甚至可以直接在registerComp函数中使用app.use(对应的函数)

//
import NRequest from './request'

app.use(createPinia())
// 安装路由插件
app.use(router)

app.mount('#app')
