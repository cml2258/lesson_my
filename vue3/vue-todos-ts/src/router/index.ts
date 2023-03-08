// index.js => index.ts
// typescript = js + 强类型 type 类型 script脚本 js的超集
import { createRouter,createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue'
  
    // 不能为空 
    const router = createRouter({
        history:createWebHistory(),
        // 每个route的配置 满足RouteRecordRaw类型的约束
        routes:[
            {
                path:'/',
                name:'home',
                component:HomeView,
                // a:1
            }
        ] as RouteRecordRaw[]
     })
    // 路由管理对象
    export default router