import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router'

//引入路由组件
// import login from '../pages/login/index.vue'

const routes:RouteRecordRaw[] = [
    {
        path:'/',
        name:'home',
        component:()=>import('@/views/Master/Master.vue'),
        // meta:{
        //     requiresAuth:true
        // }
        children:[

        ]
    },
    {    
        path:'/daily',
        name:'daily',
        component:()=>import('../views/daily/Daily.vue')
    }
]
const router =  createRouter({
    routes,
    history:createWebHashHistory()
})
export default router