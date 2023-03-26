import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

//引入路由组件
// import login from '../pages/login/index.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'layout',
        redirect:'/home',
        component: () => import('@/views/blog/layout/index.vue'),
        // meta:{
        //     requiresAuth:true
        // }
        children: [
            {
                path: 'home',
                name: 'master',
                component: () => import('@/views/blog/Master/Master.vue'),
            },
            {
                path: 'daily',
                name: 'daily',
                component: () => import('../views/blog/daily/Daily.vue')
            },
            {
                path: 'article',
                name: 'article',
                component: () => import('../views/blog/article/index.vue')
            },
            {
                path:'article-detail',
                name:'article-detail',
                component: () => import('../views/blog/article-detail/index.vue'),
                props: route => ({ query: route.query.article_id })
            }
        ]
    },

    {
        path: '/admin',
        name: 'admin',
        component: () => import('@/views/admin/layout/index.vue'),
        children: [
            {
                path:'addDaily',
                name:'addDaily',
                component:() => import('@/components/Daily/AddnewDaily.vue')
            },
            {
                path:'AddArticle',
                name:'AddArticle',
                component:() => import('@/components/Article/AddNewArticle.vue')
            }
         ]
    }
]
const router = createRouter({
    routes,
    history: createWebHashHistory()
})
export default router