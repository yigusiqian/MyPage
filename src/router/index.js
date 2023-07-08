import {
    createRouter,
    createWebHashHistory,
} from 'vue-router'
import Home from '../components/Home.vue'
import Navigation from '../components/Navigation.vue'
import Seach from '../components/Seach.vue'
import MyHitokoto from '../components/MyHitokoto.vue'
const routes = [
    {
        path: '/',
        name: '首页',
        component: Home
    },
    {
        path: '/Navigation',
        name: '导航',
        component: Navigation
    },
    {
        path: '/Seach',
        name: '搜索',
        component: Seach
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router