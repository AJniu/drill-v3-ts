import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomePageView from '@/views/home/HomePageView.vue'
import LoginView from '@/views/login/LoginView.vue'
import LocalCache from '@/utils/cache'
// vue-router 核心原理：本质上是路径和组件的映射关系

// 定义路由表数组(配置映射关系)
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        // 路由路径重定向
        redirect: '/home'
    },
    {
        // 路径
        path: '/home',
        // 路由名称
        name: 'home',
        // 元数据：为路由添加额外信息时使用
        meta: {},
        // 组件
        component: HomePageView,
        redirect: '/index',
        // 子组件
        children: [
            {
                path: '/index',
                name: 'index',
                meta: {
                    title: '首页'
                },
                component: HomeView
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    }
]

// 创建路由对象
const router = createRouter({
    routes,
    // 路由模式
    history: createWebHashHistory(import.meta.env.BASE_URL)
})

router.beforeEach((to) => {
    // if (to.path !== '/login') {
    //     const token = LocalCache.getLocalCache('token')
    //     if (!token) {
    //         return '/login'
    //     }
    // }
})

// 导出路由对象
export default router
