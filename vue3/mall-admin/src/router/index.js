import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',   // 根路径   login 
            // http 状态码  302 跳转 浏览器 
            redirect: '/introduce'  // 跳转
        },
        {
            path: '/introduce',
            name: 'introduce',
            component: () => import('@/views/Introduce.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/Login.vue')
        },
        {
            path: '/add',
            name: 'add',
            meta: {
                login: true
            },
            component: () => import('@/views/Add.vue')
        },
        {
            path:'/swiper',
            name: 'swiper',
            meta: {
                login: true
            },
            component: () => import('@/views/Swiper.vue')
        },
        {
            path:'/category',
            name: 'category',
            meta: {
                login: true
            },
            component: () => import('@/views/Category.vue'),
            children:[
                {
                    path:'/category/level2',
                    name:'level2',
                    component:() => import('@/views/Category.vue')
                },
                {
                    path:'/category/level3',
                    name:'level3',
                    component:() => import('@/views/Category.vue')
                }
            ]
        }
    ]
})

export default router